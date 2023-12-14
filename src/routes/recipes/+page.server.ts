import type { Actions, PageServerLoad } from './$types';
import { recipes, ingredientLines } from '$lib/data';
import type { IngredientLine, Recipe } from 'src/app';

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
			r.ingredients = []
			
			allIngredientLines.filter((l: IngredientLine) => l.recipe === r.id).forEach((l: IngredientLine) => {
				r.ingredients?.push({
					quantity: l.quantity,
					ingredient: {
						name: allIngredients.find(i => i.id === l.ingredient).name,
						inStock: allIngredients.find(i => i.id === l.ingredient).inStock,
					}
				})
			})

			r.missing = r.ingredients.reduce((n, i) => n + +!i.ingredient.inStock, 0);

		})
		recipeList.sort((a, b) => a.missing - b.missing);

		return { recipeList };
	} catch (error) {
		console.log('[PB:] ', error);
	}

	// mock API call to get list of all recipes
	const recipeList: { recipe: Recipe; ingredients: IngredientLine[]; missing: number }[] = [];
	recipes.forEach((recipe) => {
		const ingredients = ingredientLines.filter((i) => i.recipe.name === recipe.name);
		const missing = ingredients.reduce((n, i) => n + +!i.ingredient.inStock, 0);
		recipeList.push({ recipe, ingredients, missing });
	});

	// sort by fewest missing ingredients to highest
	recipeList.sort((a, b) => a.missing - b.missing);

	
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
