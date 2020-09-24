import * as Api from './api'
import * as Page from './page'
import * as Origin from './origin'

if (addEventListener) {
  addEventListener('fetch', (event: any) => {
    event.respondWith(handleEvent(event))
  })
}

export type VitaleWorkerEvent = {
  request: Request
}

export async function handleEvent(event: any) {
  const request: Request = event.request

  if (Api.match(request)) {
    return Api.handleRequest(request)
  }

  if (Page.match(request)) {
    return Page.handleRequest(request)
  }
  
  if (Origin.match(request)) {
    return Origin.handleRequest(request)
  }

  return new Response(null, { status: 404 })
}

