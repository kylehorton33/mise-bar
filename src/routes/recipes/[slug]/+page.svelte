<script>
	import { stockList } from '$lib/store';
	export let data;
</script>

<div class="grid gap-4 mt-12 justify-center w-72 mx-auto">
	<h1 class="text-xl text-center">{data.recipe.name}</h1>
	<hr />
	<ul class="list-disc list-inside">
		{#if data.recipe.ingredients}
			{#each data.recipe.ingredients as { ingredient, quantity }}
				<li class={$stockList[ingredient.name] ? '' : 'text-error-800'}>
					{quantity}
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
	<img src="/images/{data.recipe.slug}.jpg" class="mt-10 h-48 mx-auto rounded-lg" alt="Missing" />
</div>
