import type { PageServerLoad } from './$types';
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
