---
description: Vitale pages are Components exported in a file in the pages directory.
---

# Pages


### Pages with Dynamic Routes

## Pre-rendering

By default, Vitale **pre-renders** every page. This means that Vitale generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.


### Two forms of Pre-rendering


## Static Generation (Recommended)

### When should I use Static Generation?


## Server-side Rendering

## Summary

We've discussed two forms of pre-rendering for Vitale.

- **Static Generation (Recommended):** The HTML is generated at **build time** and will be reused on each request. To make a page use Static Generation, either export the page component, or export `getStaticProps` (and `getStaticPaths` if necessary). It's great for pages that can be pre-rendered ahead of a user's request. You can also use it with Client-side Rendering to bring in additional data.
- **Server-side Rendering:** The HTML is generated on **each request**. To make a page use Server-side Rendering, export `getServerSideProps`. Because Server-side Rendering results in slower performance than Static Generation, use this only if absolutely necessary.
