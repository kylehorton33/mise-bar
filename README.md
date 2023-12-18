## Latest Version (0.1.3) - [Changelog](CHANGELOG.md) of old versions

- fix image loading bugs. save imageUrl path directly when creating store
- fractional display raw tag: `{@html exp}`
- sort ingredients by name (case insensitive)

## :construction: In Progress

- fix 12.18: data seems to "expire" in mobile tab if left open for too long. try to recreate in `npm run preview` to look at console.logs. maybe reorder the sequencing of pb data load, localStorage, stores.
  - use `import { localStorageStore } from '@skeletonlabs/skeleton'`

## TODO

- `12.16` - user tests
- `12.17` - link tests up with PocketBase data
- `12.17` - @kate press enter/search to exit input bar
- `12.17` - modal for the single recipe pages? upside: will save filterTerm. downside: will lose direct links to pages?

- feat 12.18: save `filterTerm` in `store.ts`. this will allow term to persist when swtiching between `/ingredients` and `/recipes` and when switching back from `/recipes` from `/recipe/[slug]`
  -  `12.17` - @kate keep search results when navigating back to `/recipes` from `/recipe/[slug]`
- docs 12.18: create a `LICENSE.md`
- feat 12.18: improve `/about` page. maybe using:
  - `import { Stepper, Step } from '@skeletonlabs/skeleton';`
- feat 12.18: explore TS class implementation and move some common operations to methods of `Ingredient` or `Recipe` classes
