import { graphql, buildSchema } from 'graphql'
import DataLoader from 'dataloader'

function binary_to_string(array: any[]) {
  var result = ''
  for (var i = 0; i < array.length; ++i) {
    result += String.fromCharCode(array[i])
  }
  return result
}

async function decodequery(request: any) {
  const reader = request.body.getReader()
  let query = ''
  while (true) {
    let { done, value } = await reader.read()
    if (done) {
      break
    }
    query = query + binary_to_string(value)
  }
  let gql = JSON.parse(query)
  return gql
}

const schema = buildSchema(`
  "DNS record type."
  enum RecordType {
    A
    AAAA
    MX
    CNAME
    DNSKEY
    DS
    NAPTR
    NS
    PTR
    SPF
    SRV
    SSHFP
    TLSA
    TXT
  }
  "DNS query response"
   type Answer {
    "The record owner."
    name: String
    """The type of DNS record.
    These are defined here:
    https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4
    """
    type: Int
    """The number of seconds the answer can be stored
    in cache before it is considered stale."""
    TTL: Int
    """The value of the DNS record for the given name and type.
    The data will be in text for standardized record types and in hex for unknown types."""
    data: String
  }
  "A DNS query to resolve a DNS record of a given type."
  type Query {
    resolve(name: String!, type: RecordType!): [Answer]
  }
`)

async function resolve(event: any, x: any) {
  let req = new Request(
    'https://cloudflare-dns.com/dns-query?name=' + x.name + '&type=' + x.type,
    {
      headers: {
        Accept: 'application/dns-json'
      }
    }
  )

  let cache = await caches.open('dns')
  let resp = await cache.match(req)

  if (!resp) {
    resp = await fetch(req)
    event.waitUntil(cache.put(req, resp.clone()))
  }
  let ans = await resp.json()
  return ans.Answer
}

async function batchResolver(event: any, keys: any) {
  return keys.map((id: any) => resolve(event, id))
}

const cacheMap = new Map()

class Root {
  resolvers: any
  cacheMap: any = cacheMap

  constructor(event: any) {
    this.resolvers = new DataLoader((keys) => batchResolver(event, keys), {
      cacheKeyFn: (q: any) => q.type + q.name,
      cacheMap: cacheMap
    })
  }
  async resolve(x: any) {
    return this.resolvers.load(x)
  }
}

export function create(event: any) {
  return {
    async resolve() {
      return handleEvent(event)
    }
  }
}

export async function handleEvent(event: any) {
  if (!event.request.body) {
    throw new Error('Body Required')
  }
  let gql = await decodequery(event.request)
  let response = await graphql(schema, gql.query, new Root(event))
  return new Response(JSON.stringify(response))
}
