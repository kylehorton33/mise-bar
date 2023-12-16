<script>
	import { stockList } from '$lib/store';
	export let data;
</script>

<div class="grid gap-4 mt-12 justify-center">
	<h1 class="text-xl text-center">{data.recipe.name}</h1>
	<hr />
	<ul class="list-disc list-inside w-72">
		{#if data.recipe.ingredients}
			{#each data.recipe.ingredients as { ingredient, quantity }}
				<li class={$stockList[ingredient.name] ? '' : 'text-error-800'}>
					{quantity} oz {ingredient.name}
				</li>
			{/each}
		{:else}
			<li>No ingredient data listed</li>
		{/if}
	</ul>
	<p class="w-72">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, eos? Unde illum aliquam, dolores
		harum voluptas quo, blanditiis repellendus deserunt, libero nam aspernatur? Provident quo quis
		suscipit repudiandae nemo neque.
	</p>
	<img src="/images/{data.recipe.slug}.jpg" class="h-48 mx-auto rounded-lg" alt="Missing" />
</div>
