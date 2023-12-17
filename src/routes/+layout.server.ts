import type { LayoutServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ locals }) => {
	try {
		const ingredients = await locals.pb.collection('ingredients')
			.getFullList({ sort: '-updated', fields: 'name' });
		const recipes = await locals.pb.collection('recipes')
			.getFullList({ sort: '-updated', fields: 'name' });
		const ingredientLines = await locals.pb.collection('ingredientLines')
			.getFullList({ sort: '-updated', fields: 'recipe, ingredient, quantity' });
		return { ingredients, recipes, ingredientLines }

	} catch (e) {
		console.log("error")
		throw error(500)
	}
};
