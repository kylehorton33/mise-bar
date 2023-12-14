import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const ingredients = await locals.pb.collection('ingredients').getFullList({ sort: 'name' });
	return {
		ingredients
	};
};
