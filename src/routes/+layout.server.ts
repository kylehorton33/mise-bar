import type { LayoutServerLoad } from './$types';
import { error } from '@sveltejs/kit';

import { sortByName } from '$lib/utils';

export const load: LayoutServerLoad = async ({ locals }) => {
	try {
		const recipes: Recipe[] = await locals.pb
			.collection('recipes')
			.getFullList({
				sort: 'name',
				fields: 'id, name, slug, instructions, image, collectionId'
			});
		let ingredients: Ingredient[] = await locals.pb
			.collection('ingredients')
			.getFullList({ fields: 'id, name, unit' });
		const ingredientLines: IngredientLine[] = await locals.pb
			.collection('ingredientLines')
			.getFullList({
				sort: '-updated',
				fields: 'recipe, ingredient, quantity'
			});

		ingredients = sortByName(ingredients);

		recipes.forEach((recipe) => {
			recipe.ingredients = ingredientLines
				.filter((line) => line.recipe === recipe.id)
				.map((line) => {
					const blankIng = { id: '', name: '-', unit: '-' };
					let temp: IngredientLineData = Object.assign(
						{},
						{ ...line, ingredient: blankIng }
					);
					temp.ingredient =
						ingredients.find((i) => i.id === line.ingredient) || blankIng;
					return temp;
				});
			recipe.image = `${import.meta.env.VITE_POCKETBASE_URL}/api/files/${
				recipe.collectionId
			}/${recipe.id}/${recipe.image}?thumb=300x300`;
		});

		return { ingredients, recipes, ingredientLines };
	} catch (e) {
		console.log('error');
		throw error(500);
	}
};
