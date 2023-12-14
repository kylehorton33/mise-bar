import type { PageServerLoad } from './$types';
import { recipes, ingredientLines } from '$lib/data';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const recipe = recipes.find((r) => r.slug == params.slug);

	if (!recipe) {
		throw error(404, `${params.slug} not found`);
	}

	const fullRecipe: { recipe: App.Recipe; ingredients: App.IngredientLine[] } = {
		recipe,
		ingredients: ingredientLines.filter((l) => l.recipe.name == recipe.name)
	};

	return { fullRecipe };
};
