# CHANGELOG

## v0.1.4

- 2023-12-18
- fix: data seems to "expire" in mobile tab if left open for too long. (12.18)
  - found source of issue `+page.server.ts` load of store not working if tab left open too long
  - fixed with reading `recipe` directly from `$recipes` store with `$page.params.slug`
- docs: create a `LICENSE.md` (12.18)
- feat: improved `/about` page. using: `{ Stepper, Step }` from `'@skeletonlabs/skeleton'` (12.18)
- feat: @kate press enter/search to exit input bar (12.17)

## v0.1.3

- 2023-12-17
- fix image loading bugs. save imageUrl path directly when creating store
- fractional display raw tag: `{@html exp}`
- sort ingredients by name (case insensitive)

## v0.1.2

- 2023-12-17
- switch back to PocketBase for data, keep `stockList` in `local storage`
- load from `data.ts` to PocketBase with `npm run create`

## v0.1.1

- 2023-12-16
- added more data to `data.ts`

## v0.1.0

- 2023-12-15
- forked from [`mise`](https://github.com/kylehorton33/mise) (2023-12-07)
- static app with data and images loaded file asset `data.ts` or `static/images`
- track stockList changes in `local storage`
