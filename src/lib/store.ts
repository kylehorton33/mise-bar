import { readable, writable } from 'svelte/store';
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
export const ingredients = writable();
export const recipes = writable();
export const ingredientLines = writable();