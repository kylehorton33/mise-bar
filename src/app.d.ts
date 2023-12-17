// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// and what to do when importing types
declare namespace App {
	interface Locals {
		pb: Pocketbase;
		user: Record | Admin | null;
	}
	// interface PageData {}
	interface Error {
		response: {
			code: number;
			message: string;
		};
	}
	// interface Platform {}
}

//declare module '*.svelte';

interface Ingredient {
	id: string;
	name: string;
	unit: string;
}

interface Recipe {
	id: string;
	name: string;
	slug: string;
	instructions: string;
	image: string;
	ingredients?: IngredientLineData[] | null;
	missing?: number;
}

interface IngredientLine {
	recipe: string;
	ingredient: string;
	quantity: number;
}

interface IngredientLineData {
	recipe: string;
	ingredient: Ingredient;
	quantity: number;
	
}
