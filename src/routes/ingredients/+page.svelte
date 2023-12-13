<script lang="ts">
	export let data;
</script>

<h1 class="text-center pt-6 pb-10">Ingredients</h1>

<ul class="grid mx-auto max-w-5xl md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
	{#each data.ingredients as ingredient}
		<li>
			<label for={ingredient.name} class="flex items-center space-x-2">
				<input class="checkbox" type="checkbox" checked={ingredient.inStock} />
				<span>{ingredient.name}</span>
			</label>
		</li>
	{/each}
</ul>
