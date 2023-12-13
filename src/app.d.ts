// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	interface Ingredient {
		name: string;
		inStock: boolean;
	}
	interface Recipe {
		name: string;
		slug: string;
	}
	interface IngredientLine {
		recipe: Recipe;
		ingredient: Ingredient;
		quantity: number;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare module '*.svelte';
