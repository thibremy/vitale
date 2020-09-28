// import * as Asset from './asset/cloudflare-asset'
// import * as GraphQL from './graphql'
// import * as Router from './router'

addEventListener('fetch', (event: any) => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event: any) {
 
  let u = new URL(event.request.url);
  switch (u.pathname) {
    case "/":
      return await fetch("https://storage.googleapis.com/cfgraphql/index.html");
    case "/graphiql/cfgql.css":
      return await fetch("https://storage.googleapis.com/cfgraphql/cfgql.css");
    case "/graphiql/cfgql.js":
      return await fetch("https://storage.googleapis.com/cfgraphql/cfgql.js");
    default:
      return new Response(JSON.stringify("OK"));
  }
}
