import { writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const stockList = localStorageStore('stockList', {} as StockList);

export const ingredients = writable([] as Ingredient[]);
export const recipes = writable([] as Recipe[]);
export const ingredientLines = writable([] as IngredientLine[]);
