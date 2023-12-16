<script lang="ts">
	import { FilterSearch, RecipeCard } from '$lib/components';
	import { stockList } from '$lib/store';
	
	export let data;
	let filterTerm: string = '';

	function missing(recipe: Recipe) {
		return recipe.ingredients?.reduce((n, l) => n + +!$stockList[l.ingredient.name], 0);
	}

	data.recipes.forEach((recipe) => {
		recipe.missing = missing(recipe);
	});

	data.recipes.sort((a: Recipe, b: Recipe) => a.missing - b.missing);
</script>

<div class="grid gap-4">
	<h1 class="text-center pt-6">Recipes</h1>

	<FilterSearch bind:filterTerm />
	<ul class="grid md:grid-cols-2 2xl:grid-cols-3 mx-auto gap-4 max-h-[30rem] overflow-y-scroll">
		{#each data.recipes as recipe}
			<RecipeCard bind:filterTerm bind:recipe />
		{/each}
	</ul>
</div>
