import type { PageServerLoad } from './$types';
import { recipes } from '$lib/store'; // recipes are not loaded from store?
import { get } from 'svelte/store';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	// source of the issue is here. recipe does not 
	const recipe = get(recipes).find((recipe) => recipe.slug === params.slug)

	console.log('[DEBUG "/recipes/[slug]/+page.server.ts" get(recipes) =>]', get(recipes)[0])
	console.log('[DEBUG "/recipes/[slug]/+page.server.ts" recipe =>]', recipe)

	if (recipe) {
		return { recipe }
	} else {
		//console.log('[ERROR /recipes/[slug]/+page.server]: no recipe found')
		//throw error(404)
	}
};
