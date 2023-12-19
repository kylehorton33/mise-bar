## :rocket: Latest Version (0.1.3) - [CHANGELOG](CHANGELOG.md)

- fix image loading bugs. save imageUrl path directly when creating store
- fractional display raw tag: `{@html exp}`
- sort ingredients by name (case insensitive)

## :soon: v0.1.4

- fix: data seems to "expire" in mobile tab if left open for too long. (12.18)
  - found source of issue `+page.server.ts` load of store not working if tab left open too long
  - fixed with reading `recipe` directly from `$recipes` store with `$page.params.slug`
- docs: create a `LICENSE.md` (12.18)
- feat: improved `/about` page. using: `{ Stepper, Step }` from `'@skeletonlabs/skeleton'` (12.18)

## :construction: TODO

- test: link tests up with PocketBase data (12.17)
- feat: @kate press enter/search to exit input bar (12.17)
- feat: modal for the single recipe pages? upside: will save filterTerm. downside: will lose direct links to pages? (12.17)
- feat: save `filterTerm` in `store.ts`. this will allow term to persist when swtiching between `/ingredients` and `/recipes` and when switching back from `/recipes` from `/recipe/[slug]` (12.18)
  -  `12.17` - @kate keep search results when navigating back to `/recipes` from `/recipe/[slug]` (12.17)
- feat 12.18: explore TS class implementation and move some common operations to methods of `Ingredient` or `Recipe` classes
- refactor 12.18: maybe reorder the sequencing of pb data load, localStorage, stores.
  - use `import { localStorageStore } from '@skeletonlabs/skeleton'`
- feat: add a new favicon/update titles on pages: `mise` `mise | recipes`
- feat: color for each recipe. vertical bar on `RecipeCard` and horizontal bar under h1 on `/recipes/[slug]/+page`
- launch: user tests (12.17)
