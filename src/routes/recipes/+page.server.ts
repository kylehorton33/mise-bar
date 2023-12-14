import type { Actions, PageServerLoad } from './$types';
import { recipes, ingredientLines } from '$lib/data';

export const load: PageServerLoad = async () => {
	// mock API call to get list of all recipes
	const recipeList: { recipe: App.Recipe; ingredients: App.IngredientLine[]; missing: number }[] =
		[];
	recipes.forEach((recipe) => {
		const ingredients = ingredientLines.filter((i) => i.recipe.name === recipe.name);
		const missing = ingredients.reduce((n, i) => n + +!i.ingredient.inStock, 0);
		recipeList.push({ recipe, ingredients, missing });
	});

	// sort by fewest missing ingredients to highest
	recipeList.sort((a, b) => a.missing - b.missing);

	return { recipeList };
};

export const actions: Actions = {
	create: async ({ request }) => {
		const body = Object.fromEntries(await request.formData())
		console.log(body)
		// validate data, send back if not
		// create recipe
		// create ingredientLines
		// redirect to single recipe
	}

};