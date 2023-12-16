export const ingredients: Ingredient[] = [
	{ unit: 'oz', name: 'Campari' },
	{ unit: 'oz', name: 'gin' },
	{ unit: 'oz', name: 'sweet vermouth' },
	{ unit: 'oz', name: 'bourbon' },
	{ unit: 'oz', name: 'green Chartreuse' },
	{ unit: 'oz', name: 'maraschino liqueur' },
	{ unit: 'oz', name: 'lime juice' },
	{ unit: 'oz', name: 'mezcal' },
	{ unit: 'oz', name: 'yellow Chartreuse' },
	{ unit: 'oz', name: 'Aperol' }
];

export const recipes: Recipe[] = [
	{ name: 'Negroni', slug: 'negroni' },
	{ name: 'Boulevardier', slug: 'boulevardier' },
	{ name: 'Last Word', slug: 'last-word' },
	{ name: 'Naked and Famous', slug: 'naked-and-famous' }
];

function getIng(name: string) {
	return ingredients.find((i) => i.name == name) || { name: '-', unit: '-', inStock: false };
}

export const ingredientLines: IngredientLine[] = [
	{ recipe: 'negroni', ingredient: getIng('Campari'), quantity: 1 },
	{ recipe: 'negroni', ingredient: getIng('gin'), quantity: 1 },
	{ recipe: 'negroni', ingredient: getIng('sweet vermouth'), quantity: 1 },
	{ recipe: 'boulevardier', ingredient: getIng('bourbon'), quantity: 1 },
	{ recipe: 'boulevardier', ingredient: getIng('Campari'), quantity: 1 },
	{ recipe: 'boulevardier', ingredient: getIng('sweet vermouth'), quantity: 1 },
	{ recipe: 'last-word', ingredient: getIng('gin'), quantity: 1 },
	{ recipe: 'last-word', ingredient: getIng('green Chartreuse'), quantity: 1 },
	{ recipe: 'last-word', ingredient: getIng('maraschino liqueur'), quantity: 1 },
	{ recipe: 'last-word', ingredient: getIng('lime juice'), quantity: 1 },
	{ recipe: 'naked-and-famous', ingredient: getIng('mezcal'), quantity: 1 },
	{ recipe: 'naked-and-famous', ingredient: getIng('yellow Chartreuse'), quantity: 1 },
	{ recipe: 'naked-and-famous', ingredient: getIng('Aperol'), quantity: 1 },
	{ recipe: 'naked-and-famous', ingredient: getIng('lime juice'), quantity: 1 }
];
