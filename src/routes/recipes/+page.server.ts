import type { Actions, PageServerLoad } from './$types';
import { recipes, ingredientLines } from '$lib/data';

export const load: PageServerLoad = async ({locals}) => {
	try {
		const allRecipes = await locals.pb.collection('recipes').getFullList({sort: 'name', fields: 'id, name' });
		const allIngredients = await locals.pb.collection('ingredients').getFullList({sort: 'name', fields: 'id, name, inStock' });
		const allRecipeLines = await locals.pb.collection('recipe_lines').getFullList({sort: 'recipe', fields: 'recipe, ingredient, quantity' });

		// figure out how to fold all this data together
		
	} catch (error) {
		console.log("[PB:] ", error)
	}

	// mock API call to get list of all recipes
	const recipeList: { recipe: Recipe; ingredients: IngredientLine[]; missing: number }[] =
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