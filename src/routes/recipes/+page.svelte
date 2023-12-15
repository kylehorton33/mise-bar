<script lang="ts">
	import { FilterSearch, RecipeCard } from '$lib/components';

	export let data;
	let filterTerm: string = '';

</script>

<div class="grid gap-4">
	<h1 class="text-center pt-6">Recipes</h1>
	<div class="w-72 flex mx-auto gap-4">
		<FilterSearch bind:filterTerm />
		<div class="text-center">
			<a href="/recipes/new" class="btn variant-filled">New</a>
		</div>
	</div>
	<ul class="grid md:grid-cols-2 2xl:grid-cols-3 mx-auto gap-4 max-h-[30rem] overflow-y-scroll">
		{#each data.recipeList as { name, slug, ingredients, missing }}
			<RecipeCard bind:filterTerm name={name} bind:slug bind:ingredients bind:missing />
		{/each}
	</ul>
</div>
