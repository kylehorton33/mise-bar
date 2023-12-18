<script>
	import { stockList } from '$lib/store';
	import { fractionHTML } from '$lib/utils';
	export let data;
</script>

<div class="grid gap-4 mt-12 justify-center w-72 mx-auto">
	<h1 class="text-xl text-center">{data.recipe.name}</h1>
	<hr />
	<ul class="list-disc list-inside">
		{#if data.recipe.ingredients}
			{#each data.recipe.ingredients as { ingredient, quantity }}
				<li class={$stockList[ingredient.name] ? '' : 'text-error-800'}>
					{@html fractionHTML(quantity)}
					{ingredient.unit}
					{ingredient.name}
				</li>
			{/each}
		{:else}
			<li>No ingredient data listed</li>
		{/if}
	</ul>
	<p class="w-72">
		{data.recipe.instructions}
	</p>
	{#if data.recipe.image}
		<img src={data.recipe.image} class="mt-10 mx-auto rounded-lg" alt="Missing" />
	{:else}
		<div class="placeholder h-48 flex justify-center items-center">missing image</div>
	{/if}
</div>
