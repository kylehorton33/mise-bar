import type { PageServerLoad } from './$types';
import { recipes, ingredientLines } from '$lib/data';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, locals }) => {
	try {
		const recipe = await locals.pb.collection('recipes').getFirstListItem(`slug="${params.slug}"`);
		const ingredientLines = await locals.pb.collection('ingredientLines').getFullList({ filter: `recipe="${recipe.id}"` });
		const getIngredients = async () => {
			return Promise.all(ingredientLines.map(async (l) => {
				const ingredient = await locals.pb.collection('ingredients').getOne(l.ingredient);
				return {
					quantity: l.quantity,
					ingredient: {
						name: ingredient.name,
						inStock: ingredient.inStock,
					}
				}
			}))
		}
		recipe.ingredients = await getIngredients()
		//console.log(ingredients)


		console.log(recipe)
		return { recipe };
	} catch (error) {
		console.log(error.response.code, error.response.message)
	}

	const recipe = recipes.find((r) => r.slug == params.slug);

	if (!recipe) {
		throw error(404, `${params.slug} not found`);
	}

	const fullRecipe: { recipe: Recipe; ingredients: IngredientLine[] } = {
		recipe,
		ingredients: ingredientLines.filter((l) => l.recipe.name == recipe.name)
	};

	return { fullRecipe };
};
