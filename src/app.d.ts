// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { ingredients } from "$lib/data";

// and what to do when importing types
declare namespace App {
	interface Locals {
		pb: PocketBase;
		user: Record | Admin | null;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare module '*.svelte';

interface Ingredient {
	name: string;
	inStock: boolean;
}
interface Recipe {
	id?: string;
	name: string;
	slug: string;
	ingredients?: IngredientLine[];
}
interface IngredientLine {
	recipe: string;
	ingredient: string;
	quantity: number;
}
