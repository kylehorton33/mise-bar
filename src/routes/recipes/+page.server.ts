import { recipes } from "$lib/data";

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    // API call should be alphabetical
    return { recipes }
};