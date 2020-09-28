# 💖 Vitale

Vitale is an edge-rendered framework built for Cloudflare Workers.  
It features file-based page routing with dynamic page paths and edge-side data fetching APIs.  

## ✨Features

- Pages are generated and cached using the Cloudflare Worker Cache by default at the edge, similar to Server Side Generation.
- Pages can be revalidated after a specified time, similar to incremental Server Side Generation.
- Pages can also be revalidated on every single request, similar to Server Side Rendering.
- Pages can fetch from your component as a typical AJAX request.

## Usage

See `/playground`

```
import vitale from '@thibremy/vite-plugin-vitale'

export default {
  plugins: [vitale()],
}
```

```
name = "vitale-playground-basic"
type = "javascript"
zone_id = ""
account_id = ""
route = ""
workers_dev = true

[site]
bucket = "./dist"
entry-point = "./dist/_assets/dist-worker"
```


```
npm i
npm run build
wrangler dev
```

## Setup

```
npm i
npx lerna bootstrap
npm run build
```
