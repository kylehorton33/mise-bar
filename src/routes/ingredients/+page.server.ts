import type { Actions, PageServerLoad } from './$types';
import { ingredients } from '$lib/data';
// import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	// API call should be alphabetical?
	return { ingredients };
};

export const actions: Actions = {
	create: async ({ request }) => {
		const body = Object.fromEntries(await request.formData())
		console.log(body)
		// validate data, send back if not
		// send back if ingredient name is already taken
		//redirects automatically? redirect(303, '/ingredients')
	}
};