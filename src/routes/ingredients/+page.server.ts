import type { PageServerLoad } from './$types';

import { ingredients } from '$lib/data';
import { sortByName } from '$lib/utils';

export const load: PageServerLoad = async () => {
	return {
		ingredients: sortByName(ingredients)
	};
};
