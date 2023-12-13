import type { PageServerLoad } from './$types';
import { recipes, ingredientLines } from '$lib/data';

export const load: PageServerLoad = async () => {
	// API call should be alphabetical? sort by missing ingredients
	recipes.forEach((r) => {
		r.ingredientLines = ingredientLines.filter(i => {
			return i.recipe === r.name
		})
		r.missing = r.ingredientLines.reduce(
			(n, l) => n + +!false,
			0
		  )
	  
	})
	return { recipes };
};
