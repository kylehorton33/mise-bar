import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	try {
		const recipeList = await locals.pb
			.collection('recipes')
			.getFullList({ sort: 'name', fields: 'id, name, slug' });
		const allIngredients = await locals.pb
			.collection('ingredients')
			.getFullList({ fields: 'id, name, inStock' });
		const allIngredientLines = await locals.pb
			.collection('ingredientLines')
			.getFullList({ fields: 'recipe, ingredient, quantity' });

		// figure out how to fold all this data together
		recipeList.forEach((r: Recipe) => {
			r.ingredients = [];

			allIngredientLines
				.filter((l: IngredientLine) => l.recipe === r.id)
				.forEach((l: IngredientLine) => {
					const ingredient: Ingredient = allIngredients.find(
						(i: Ingredient) => i.id === l.ingredient
					);
					const data: IngredientLineData = {
						quantity: l.quantity,
						ingredient: {
							name: ingredient.name,
							inStock: ingredient.inStock
						}
					};
					r.ingredients?.push(data);
				});

			r.missing = r.ingredients.reduce((n, i) => n + +!i.ingredient.inStock, 0);
		});
		recipeList.sort((a: Recipe, b: Recipe) => a.missing - b.missing);

		return { recipeList };
	} catch (error) {
		console.log('[PB:] ', error);
	}
};

export const actions: Actions = {
	create: async ({ request }) => {
		const body = Object.fromEntries(await request.formData());
		console.log(body);
		// validate data, send back if not
		// create recipe
		// create ingredientLines
		// redirect to single recipe
	}
};
