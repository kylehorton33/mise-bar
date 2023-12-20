import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let localData;

if (browser) {
	let rawData = localStorage.getItem('stockList');
	localData = JSON.parse(rawData as string);
}

export const stockList = writable(localData || {});

stockList.subscribe((val) => {
	if (browser) {
		localStorage.setItem('stockList', JSON.stringify(val));
	}
});

// do you need to await async fetch in store?
export const ingredients = writable([] as Ingredient[]);
export const recipes = writable([] as Recipe[]);
export const ingredientLines = writable([] as IngredientLine[]);
