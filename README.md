---
description: Get started with Vitale in the official documentation, and learn more about all our features!
sidebarDepth: 1
---

# 💖 Vitale

Vitale is an edge-rendered framework built for Cloudflare Workers.  
It features file-based page routing with dynamic page paths and edge-side data fetching APIs.  

## ✨ Features

- Pages are generated and cached using the Cloudflare Worker Cache by default at the edge, similar to Server Side Generation.
- Pages can be revalidated after a specified time, similar to incremental Server Side Generation.
- Pages can also be revalidated on every single request, similar to Server Side Rendering.
- Pages can fetch from your component as a typical AJAX request.

## Dependencies

- [vite](https://github.com/vitejs/vite) *required toolchains*
- [wrangler](https://github.com/cloudflare/wrangler) *required toolchains*
- [vite-plugin-voie](https://github.com/vamplate/vite-plugin-voie)

## Usage

See [playground/basic](https://github.com/thibremy/vitale/tree/master/playground/basic)

Create a vite application and install `@thibremy/vite-plugin-vitale`

```
npm init vite-app <project-name>
cd <project-name>
npm install @thibremy/vite-plugin-vitale
```

Change or add `vite.config.js`

```
import vitale from '@thibremy/vite-plugin-vitale'

export default {
  plugins: [vitale()],
}
```

Change or add `wrangler.toml`

```
name = "vitale-playground-basic"
type = "javascript"
zone_id = ""
account_id = "<project-name>"
route = ""
workers_dev = true

[site]
bucket = "./dist"
entry-point = "./dist/_assets/dist-worker"
```

Run regular commands from `vite` or `wrangler`
```
npm i
npm run build
wrangler dev
```

## Contributing

```
npm i
npx lerna bootstrap
npm run build
```
