import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { createSlug } from '$lib/utils';

export const load: PageServerLoad = async ({ locals }) => {
	try {
		const recipeList = await locals.pb
			.collection('recipes')
			.getFullList({ sort: 'name', fields: 'id, name, slug' });
		const allIngredients = await locals.pb
			.collection('ingredients')
			.getFullList({ fields: 'id, name, inStock' });
		const allIngredientLines = await locals.pb
			.collection('ingredientLines')
			.getFullList({ fields: 'recipe, ingredient, quantity' });

		// figure out how to fold all this data together
		recipeList.forEach((r: Recipe) => {
			r.ingredients = [];

			allIngredientLines
				.filter((l: IngredientLine) => l.recipe === r.id)
				.forEach((l: IngredientLine) => {
					const ingredient: Ingredient = allIngredients.find(
						(i: Ingredient) => i.id === l.ingredient
					);
					const data: IngredientLineData = {
						quantity: l.quantity,
						ingredient: {
							name: ingredient.name,
							inStock: ingredient.inStock
						}
					};
					r.ingredients?.push(data);
				});

			r.missing = r.ingredients.reduce((n, i) => n + +!i.ingredient.inStock, 0);
		});
		recipeList.sort((a: Recipe, b: Recipe) => a.missing - b.missing);

		return { recipeList };
	} catch (error) {
		console.log('[ERROR LOADING INGREDIENTS:] ', error);
	}
};

export const actions: Actions = {
	create: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		// validate data, send back if not
		if (!body.name) {
			console.log('[ERROR USER INPUT] needs name');
			throw error(500);
		}

		let recipe: string;
		let slug: string;

		// create recipe
		const recipeData = {
			name: body.name,
			slug: createSlug(body.name as string)
		};

		try {
			const record = await locals.pb.collection('recipes').create(recipeData);
			// use id in next step
			recipe = record.id;
			slug = record.slug;
		} catch (err) {
			console.log('[ERROR CREATING RECIPE]', err);
			throw error(500);
		}

		// create ingredientLines
		const getIngredientLines = async () => {
			return Promise.all(
				Object.keys(body).map(async (l, i) => {
					if (l.includes('quantity')) {
						return {
							recipe,
							quantity: parseFloat(body[l] as string),
							ingredient: Object.values(body)[i + 1]
						};
					}
				})
			);
		};
		let lines = await getIngredientLines();

		const createIngredientLines = async () => {
			return Promise.all(
				lines.map(async (data) => {
					if (data) {
						try {
							await locals.pb
								.collection('ingredientLines')
								.create(data, { requestKey: data.ingredient });
						} catch (err) {
							console.log('[err CREATING LINES] ', err);
							throw error(500);
						}
					}
					return {
						status: 'done'
					};
				})
			);
		};

		let response = await createIngredientLines();

		console.log(response);

		throw redirect(303, `/recipes/${slug}`);
	}
};
