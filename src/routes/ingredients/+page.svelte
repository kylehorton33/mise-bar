<script lang="ts">
	import { FilterSearch, IngredientLine } from '$lib/components';
	export let data;

	let filterTerm: string = '';
</script>

<div class="grid gap-4">
	<h1 class="text-center pt-6">Ingredients</h1>
	<FilterSearch bind:filterTerm />
	<ul
		class="grid mx-auto md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center max-h-[30rem] overflow-y-scroll"
	>
		{#each data.ingredients as ingredient}
			<IngredientLine bind:filterTerm bind:ingredient />
		{/each}
	</ul>
</div>
