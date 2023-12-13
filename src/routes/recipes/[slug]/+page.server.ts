import type { PageServerLoad } from './$types';
import { recipes } from '$lib/data';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const recipe = recipes.find((r) => r.slug == params.slug);

	if (!recipe) {
		throw error(404, `${params.slug} not found`);
	}
	return { recipe };
};
