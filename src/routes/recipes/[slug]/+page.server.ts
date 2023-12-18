import type { PageServerLoad } from './$types';
import { recipes } from '$lib/store';
import { get } from 'svelte/store';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, params }) => {
	// get the recipe from store - maybe better to get directly from DB?
	const recipe = get(recipes).find((recipe) => recipe.slug === params.slug)

	console.log(get(recipes))

	if (recipe) {
		return { recipe }
	} else {
		console.log('[ERROR /recipes/[slug]/+page.server]: no recipe found')
		throw error(404)
	}
};
