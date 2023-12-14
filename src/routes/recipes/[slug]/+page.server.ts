import type { ClientResponseError } from 'pocketbase';
import type { PageServerLoad } from './$types';
import { error, type HttpError } from '@sveltejs/kit';
//import { recipes, ingredientLines } from '$lib/data';

export const load: PageServerLoad = async ({ params, locals }) => {
	try {
		const recipe = await locals.pb.collection('recipes').getFirstListItem(`slug="${params.slug}"`);
		const ingredientLines = await locals.pb
			.collection('ingredientLines')
			.getFullList({ filter: `recipe="${recipe.id}"` });
		const getIngredients = async () => {
			return Promise.all(
				ingredientLines.map(async (l: IngredientLine) => {
					const ingredient = await locals.pb.collection('ingredients').getOne(l.ingredient);
					return {
						quantity: l.quantity,
						ingredient: {
							name: ingredient.name,
							inStock: ingredient.inStock
						}
					};
				})
			);
		};
		recipe.ingredients = await getIngredients();
		//console.log(ingredients)

		console.log(recipe);
		return { recipe };
	} catch (_err) {
		const err = _err as ClientResponseError;
		console.log(err);
		throw error(err.status);
	}
};
