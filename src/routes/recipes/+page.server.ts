import type { PageServerLoad } from './$types'
import { recipes } from "$lib/data";

export const load: PageServerLoad = async () => {
    // API call should be alphabetical
    return { recipes }
};