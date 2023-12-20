## :rocket: Current v0.1.4

- 2023-12-18
- fix: data seems to "expire" in mobile tab if left open for too long. (12.18)
  - found source of issue `+page.server.ts` load of store not working if tab left open too long
  - fixed with reading `recipe` directly from `$recipes` store with `$page.params.slug`
- docs: create a `LICENSE.md` (12.18)
- feat: improved `/about` page. using: `{ Stepper, Step }` from `'@skeletonlabs/skeleton'` (12.18)
- feat: @kate press enter/search to exit input bar (12.17)

## :soon: v0.1.5

- fix: remove `Back` from Step 1 of `/about`
- refactor: use `import { localStorageStore } from '@skeletonlabs/skeleton'`

## :construction: TODO

### Priority

- feat: modal for the single recipe pages? upside: will save filterTerm. downside: will lose direct links to pages? (12.17)
  - OR feat: save `filterTerm` in `store.ts`. this will allow term to persist when swtiching between `/ingredients` and `/recipes` and when switching back from `/recipes` from `/recipe/[slug]` (12.18)
  - @kate keep search results when navigating back to `/recipes` from `/recipe/[slug]` (12.17)
- feat: add a new favicon/update titles on pages: `mise` `mise | recipes`
- feat: sort recipe cards by `% missing INGs` rather than just `n missing`.current system prioritizes all recipes with 1 missing ingredient; even if that's just: gin, tonic (missing gin). better to show a recipe with 4 ingredients missing 1 (75%) first. would also want to sort recipes by greatest to least ingredients.

### Low

- test: link tests up with PocketBase data (12.17)
- refactor: maybe reorder the sequencing of pb data load, localStorage, stores. (working after [0.1.4](#rocket-current-v014))
- feat: color for each recipe. vertical bar on `RecipeCard` and horizontal bar under h1 on `/recipes/[slug]/+page`
- launch: user tests (12.17)
- feat: sort ings on recipe by: ?. quantity? this won't work easily because of different units. use in recipe? this won't work easily because i'd need new fields to define. custom order field on `ingredientLines`?
- feat: improve `/about` by using some real world examples
  - in stock: gin, green chartreuse, lime juice, maraschino liqueur
  - out: tequila, lime juice, orange liqueur
  - ==> can make: Last Word {0}
  - ==> mising: Margarita {0}
- feat 12.18: explore TS class implementation and move some common operations to methods of `Ingredient` or `Recipe` classes

## Changelog

- [0.1.0](CHANGELOG.md#v010) [0.1.1](CHANGELOG.md#v011) [0.1.2](CHANGELOG.md#v012) [0.1.3](CHANGELOG.md#v013)
