# CHANGELOG

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
