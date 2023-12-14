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

declare module '*.svelte';

interface Ingredient {
	id: string;
	name: string;
	inStock: boolean;
}
interface Recipe {
	id?: string;
	name: string;
	slug: string;
	missing: number;
	ingredients: IngredientLineData[] | null;
}
interface IngredientLine {
	recipe: string;
	ingredient: string;
	quantity: number;
}

interface IngredientLineData {
	quantity: number;
	ingredient: {
		name: string;
		inStock: boolean;
	};
}
