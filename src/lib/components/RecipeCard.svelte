<script lang="ts">
	import MissingIcon from "./MissingIcon.svelte";

	export let filterTerm: string;

	export let recipe: Recipe;

	function listIngredients(ingredients: IngredientLineData[]) {
		return ingredients.map((i) => i.ingredient.name.toLowerCase()).join(' | ');
	}

	function filterMatch(filterTerm: string): boolean {
		const name = recipe.name.toLocaleLowerCase();
		const ingredients = listIngredients(recipe.ingredients!);
		return [name, ingredients].join().includes(filterTerm.toLowerCase());
	}
</script>

<li class={filterMatch(filterTerm) ? '' : 'hidden'}>
	<a href="/recipes/{recipe.slug}">
		<div class="block card card-hover p-2 w-72 h-32 mx-auto relative rounded-lg">
			<MissingIcon missing={recipe.missing || 0} position='absolute top-3 right-3' />
			<header class="card-header uppercase">{recipe.name}</header>
			{#if recipe.ingredients}
				<section class="p-4 text-xs">
					{listIngredients(recipe.ingredients)}
				</section>
			{/if}
		</div>
	</a>
</li>
