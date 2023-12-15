import type { Actions, PageServerLoad } from './$types';
import { ingredients } from '$lib/data';
import { sortByName } from '$lib/utils';

export const load: PageServerLoad = async () => {
	return {
		ingredients: sortByName(ingredients)
	}
};

export const actions: Actions = {
	stock: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		try {
			const data = {
				inStock: !!body.inStock
			};
			await locals.pb.collection('ingredients').update(body.id, data);
		} catch (error) {
			console.log('[ERROR STOCKING INGREDIENT] ', error);
		}
		return {
			success: true
		};
	}
};
