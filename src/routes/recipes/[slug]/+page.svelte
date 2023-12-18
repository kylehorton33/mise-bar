<script>
	import { page } from '$app/stores';
	import { recipes, stockList } from '$lib/store';
	import { fractionHTML } from '$lib/utils';
	
	const recipe = $recipes.find((recipe) => recipe.slug === $page.params.slug);
</script>

{#if recipe}
	<div class="grid gap-4 mt-12 justify-center w-72 mx-auto">
		<h1 class="text-xl text-center">{recipe.name}</h1>
		<hr />
		<ul class="list-disc list-inside">
			{#if recipe.ingredients}
				{#each recipe.ingredients as { ingredient, quantity }}
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
			{recipe.instructions}
		</p>
		{#if recipe.image}
			<img src={recipe.image} class="mt-10 mx-auto rounded-lg" alt="Missing" />
		{:else}
			<div class="placeholder h-48 flex justify-center items-center">missing image</div>
		{/if}
	</div>
{:else}
	<div class="flex flex-col text-center mt-10 space-y-6">
		<h1 class="h3">No recipe found matching:</h1>
		<h3 class="h5">"{$page.params.slug}"</h3>
		<div>
			<a href="/recipes" class="btn variant-filled-primary">Take me back to all recipes</a>
		</div>
	</div>
	
{/if}
