export const ingredients: { name: string; inStock: boolean }[] = [
	{ name: 'Campari', inStock: true },
	{ name: 'gin', inStock: true },
	{ name: 'sweet vermouth', inStock: true },
	{ name: 'bourbon', inStock: false }
];

export const recipes: { name: string; slug: string, missing?: number, ingredientLines?: { recipe: string, ingredient: string, quantity: number }[] }[] = [
	{ name: 'Negroni', slug: 'negroni' },
	{ name: 'Boulevardier', slug: 'boulevardier' },
	{ name: 'Last Word', slug: 'last-word' },
	{ name: 'Naked and Famous', slug: 'naked-and-famous' },
	{ name: 'Naked and Famous', slug: 'naked-and-famous' },
	{ name: 'Naked and Famous', slug: 'naked-and-famous' },
];

export const ingredientLines: { recipe: string, ingredient: string, quantity: number }[] = [
	{recipe: 'Negroni', ingredient: 'Campari', quantity: 1},
	{recipe: 'Negroni', ingredient: 'gin', quantity: 1},
	{recipe: 'Negroni', ingredient: 'sweet vermouth', quantity: 1},
	{recipe: 'Boulevardier', ingredient: 'gin', quantity: 1},
	{recipe: 'Boulevardier', ingredient: 'Campari', quantity: 1},
	{recipe: 'Boulevardier', ingredient: 'sweet vermouth', quantity: 1},
	{recipe: 'Last Word', ingredient: 'gin', quantity: 1},
	{recipe: 'Last Word', ingredient: 'green Chartreuse', quantity: 1},
	{recipe: 'Last Word', ingredient: 'maraschino liqueur', quantity: 1},
	{recipe: 'Last Word', ingredient: 'lime juice', quantity: 1},
	{recipe: 'Naked and Famous', ingredient: 'mezcal', quantity: 1},
	{recipe: 'Naked and Famous', ingredient: 'yellow Chartreuse', quantity: 1},
	{recipe: 'Naked and Famous', ingredient: 'Aperol', quantity: 1},
	{recipe: 'Naked and Famous', ingredient: 'lime juice', quantity: 1},
]