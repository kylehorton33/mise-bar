export const ingredients: Ingredient[] = [
	{ name: 'Campari', inStock: true },
	{ name: 'gin', inStock: true },
	{ name: 'sweet vermouth', inStock: true },
	{ name: 'bourbon', inStock: false },
	{ name: 'green Chartreuse', inStock: false },
	{ name: 'maraschino liqueur', inStock: false },
	{ name: 'lime juice', inStock: false },
	{ name: 'mezcal', inStock: true },
	{ name: 'yellow Chartreuse', inStock: false },
	{ name: 'Aperol', inStock: true }
];

function findIngredient(name: string) {
	return ingredients.find((i) => i.name == name) || { name: '-', inStock: false };
}

export const recipes: Recipe[] = [
	{ name: 'Negroni', slug: 'negroni' },
	{ name: 'Boulevardier', slug: 'boulevardier' },
	{ name: 'Last Word', slug: 'last-word' },
	{ name: 'Naked and Famous', slug: 'naked-and-famous' }
];

function findRecipe(name: string) {
	return recipes.find((i) => i.name == name) || { name: '-', slug: '-' };
}

export const ingredientLines: IngredientLine[] = [
	{ recipe: findRecipe('Negroni'), ingredient: findIngredient('Campari'), quantity: 1 },
	{ recipe: findRecipe('Negroni'), ingredient: findIngredient('gin'), quantity: 1 },
	{ recipe: findRecipe('Negroni'), ingredient: findIngredient('sweet vermouth'), quantity: 1 },
	{ recipe: findRecipe('Boulevardier'), ingredient: findIngredient('bourbon'), quantity: 1 },
	{ recipe: findRecipe('Boulevardier'), ingredient: findIngredient('Campari'), quantity: 1 },
	{ recipe: findRecipe('Boulevardier'), ingredient: findIngredient('sweet vermouth'), quantity: 1 },
	{ recipe: findRecipe('Last Word'), ingredient: findIngredient('gin'), quantity: 1 },
	{ recipe: findRecipe('Last Word'), ingredient: findIngredient('green Chartreuse'), quantity: 1 },
	{
		recipe: findRecipe('Last Word'),
		ingredient: findIngredient('maraschino liqueur'),
		quantity: 1
	},
	{ recipe: findRecipe('Last Word'), ingredient: findIngredient('lime juice'), quantity: 1 },
	{ recipe: findRecipe('Naked and Famous'), ingredient: findIngredient('mezcal'), quantity: 1 },
	{
		recipe: findRecipe('Naked and Famous'),
		ingredient: findIngredient('yellow Chartreuse'),
		quantity: 1
	},
	{ recipe: findRecipe('Naked and Famous'), ingredient: findIngredient('Aperol'), quantity: 1 },
	{ recipe: findRecipe('Naked and Famous'), ingredient: findIngredient('lime juice'), quantity: 1 }
];
