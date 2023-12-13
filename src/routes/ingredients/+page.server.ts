import type { PageServerLoad } from './$types'
import { ingredients } from "$lib/data";

export const load: PageServerLoad = async () => {
    // API call should be alphabetical
    return { ingredients }
};