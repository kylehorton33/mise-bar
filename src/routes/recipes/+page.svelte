<script lang="ts">
	import { FilterSearch, RecipeCard } from '$lib/components';
	import { recipes, stockList } from '$lib/store';

	let filterTerm: string = '';

	// RecipeClass(recipes, stockList)
	// sort by missing (move below code to Class definition)

	function missing(recipe: Recipe) {
		return recipe.ingredients?.reduce(
			(n, l) => n + +!$stockList[l.ingredient.name],
			0
		);
	}

	$recipes.forEach((recipe) => {
		recipe.missing = missing(recipe);
	});

	$recipes.sort((a: Recipe, b: Recipe) => a.missing! - b.missing!);
</script>

<svelte:head>
    <title>mise | Recipes</title> 
</svelte:head>

<div class="grid gap-4">
	<h1 class="text-center pt-6">Recipes</h1>

	<FilterSearch
		bind:filterTerm
		placeholder={`Search ${$recipes.length} recipes...`}
	/>
	<ul
		class="grid md:grid-cols-2 2xl:grid-cols-3 mx-auto gap-4
			max-h-[30rem] overflow-y-scroll"
	>
		{#each $recipes as recipe}
			<RecipeCard bind:filterTerm bind:recipe />
		{/each}
	</ul>
</div>
