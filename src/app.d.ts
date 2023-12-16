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
	name: string;
	unit: string;
	inStock?: boolean;
}
interface Recipe {
	name: string;
	slug: string;
	ingredients?: IngredientLine[] | null;
	missing?: number;
}
interface IngredientLine {
	recipe: string;
	ingredient: Ingredient;
	quantity: number;
}

interface IngredientLineData {
	quantity: number;
	ingredient: {
		name: string;
		inStock: boolean;
	};
}
