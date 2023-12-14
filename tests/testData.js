export const ingredients = [
	{ name: 'gin', inStock: true, unit: 'oz', id: 'ymrqonytbxfocpe' },
	{ name: 'Campari', inStock: true, unit: 'oz', id: 'g3jjvullk5ckayd' },
	{ name: 'sweet vermouth', inStock: true, unit: 'oz', id: 'gqv83lrcjy7e5lz' },
	{ name: 'green Chartreuse', inStock: true, unit: 'oz', id: 'tjs6cgpz1pvscxl' },
	{ name: 'lime juice', inStock: true, unit: 'oz', id: 'yj4vzf02ppkjvlb' },
	{ name: 'maraschino liqueur', inStock: false, unit: 'oz', id: 'onoiymv2ysj2fug' },
	{ name: 'bourbon', inStock: false, unit: 'oz', id: 'kjck2sy8mzwhmqc' }
];

export const recipes = [
	{ name: 'Negroni', slug: 'negroni', id: 'j88ygws6q3jzbxr' },
	{ name: 'Boulevardier', slug: 'boulevardier', id: '05cx5y6wsd2jn0a' },
	{ name: 'Last Word', slug: 'last-word', id: 'tq1jjguoem6k312' }
];

export const ingredientLines = [
	// NEGRONI
	{ recipe: 'j88ygws6q3jzbxr', ingredient: 'ymrqonytbxfocpe', quantity: 1, id: 'tcl20gfn3io2h0i' },
	{ recipe: 'j88ygws6q3jzbxr', ingredient: 'g3jjvullk5ckayd', quantity: 1, id: 'o9lczzr8eor2ex6' },
	{ recipe: 'j88ygws6q3jzbxr', ingredient: 'gqv83lrcjy7e5lz', quantity: 1, id: 'er1j5i894ctw33w' },
	// BOULEVARDIER
	{ recipe: '05cx5y6wsd2jn0a', ingredient: 'kjck2sy8mzwhmqc', quantity: 1, id: 'm2vckiu5g8llajp' },
	{ recipe: '05cx5y6wsd2jn0a', ingredient: 'g3jjvullk5ckayd', quantity: 1, id: 'tw9dqgploatorel' },
	{ recipe: '05cx5y6wsd2jn0a', ingredient: 'gqv83lrcjy7e5lz', quantity: 1, id: 'y1pb3owor0kl31a' },
	// LAST WORD
	{
		recipe: 'tq1jjguoem6k312',
		ingredient: 'ymrqonytbxfocpe',
		quantity: 0.75,
		id: '5yux802k66emi1x'
	},
	{
		recipe: 'tq1jjguoem6k312',
		ingredient: 'tjs6cgpz1pvscxl',
		quantity: 0.75,
		id: 'bwe55gmhlece433'
	},
	{
		recipe: 'tq1jjguoem6k312',
		ingredient: 'onoiymv2ysj2fug',
		quantity: 0.75,
		id: '4rhyntp323gve3i'
	},
	{
		recipe: 'tq1jjguoem6k312',
		ingredient: 'yj4vzf02ppkjvlb',
		quantity: 0.75,
		id: '4mykiifkljqet2h'
	}
];
