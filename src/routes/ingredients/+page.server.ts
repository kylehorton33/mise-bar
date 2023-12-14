import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	try {
		const ingredients = await locals.pb
			.collection('ingredients')
			.getFullList({ sort: 'name', fields: 'id, name, inStock' });
		return { ingredients };
	} catch (error) {
		console.log('[PB:] ', error);
	}
};

export const actions: Actions = {
	create: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		// validate data, send back if not
		if (!body.name) {
			console.log('name missing');
			throw error(500);
		}
		try {
			const data = {
				name: body.name,
				inStock: !!body.inStock,
				unit: body.unit
			};
			await locals.pb.collection('ingredients').create(data);
		} catch (error) {
			console.log(error);
		}
		// send back if ingredient name is already taken
		//redirects automatically? redirect(303, '/ingredients')
	},
	stock: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		try {
			const data = {
				inStock: !!body.inStock
			};
			await locals.pb.collection('ingredients').update(body.id, data);
		} catch (error) {
			console.log(error);
		}
		return {
			success: true
		};
	}
};
