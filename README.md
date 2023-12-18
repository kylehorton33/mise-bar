# Roadmap

## v0.1.0

- forked from [`mise`](https://github.com/kylehorton33/mise)
- static app with data and images loaded file asset `data.ts` or `static/images`
- track stockList changes in `local storage`

## v0.1.1

- added more data to `data.ts`

## v0.1.2

- switch back to PocketBase for data, keep `stockList` in `local storage`
- load from `data.ts` to PocketBase with `npm run create`

## v0.1.3

- fix image loading bugs. save imageUrl path directly when creating store
- fractional display raw tag: `{@html exp}`
- sort ingredients by name (case insensitive)

## :construction: In Progress

- `12.16` - user tests
- `12.17` - link tests up with PocketBase data
- `12.17` - @kate press enter/search to exit input bar
- `12.17` - modal for the single recipe pages? upside: will save filterTerm. downside: will lose direct links to pages?
- fix 12.18: data seems to "expire" in mobile tab if left open for too long. try to recreate in `npm run preview` to look at console.logs. maybe reorder the sequencing of pb data load, localStorage, stores.
  - use `import { localStorageStore } from '@skeletonlabs/skeleton'`
- feat 12.18: save `filterTerm` in `store.ts`. this will allow term to persist when swtiching between `/ingredients` and `/recipes` and when switching back from `/recipes` from `/recipe/[slug]`
  -  `12.17` - @kate keep search results when navigating back to `/recipes` from `/recipe/[slug]`
- docs: create a `LICENSE.md`
- 
