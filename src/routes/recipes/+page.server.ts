import type { PageServerLoad } from './$types';

import { recipes, ingredientLines } from '$lib/data';

export const load: PageServerLoad = async () => {
	recipes.forEach((recipe) => {
		recipe.ingredients = ingredientLines.filter((l) => l.recipe === recipe.slug)
	})
	return {
		recipes
	}
};