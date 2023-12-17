import type { PageServerLoad } from './$types';
import { recipes } from '$lib/store';
import { get } from 'svelte/store';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, params }) => {
	// get the recipe from store - maybe better to get directly from DB?
	const recipe = get(recipes).find((recipe) => recipe.slug === params.slug)

	if (recipe) {
		try {
			const record = await locals.pb.collection('recipes').getOne(recipe.id);
			recipe.image = await locals.pb.files.getUrl(record, recipe.image, {thumb: '300x300'})
			return { recipe }
		} catch (e) {
			console.log('[ERROR /recipes/[slug]/+page.server]')
			throw error(500)
		}
	} else {
		console.log('[ERROR /recipes/[slug]/+page.server]: no recipe found')
		throw error(404)
	}
};
