<script lang="ts">
	export let data;
	let filterTerm: string = '';
</script>

<div class="grid gap-4">
	<h1 class="text-center pt-6">Ingredients</h1>
	<div class="w-72 mx-auto input-group input-group-divider grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim">(i)</div>
		<input type="search" placeholder="Search..." bind:value={filterTerm} />
	</div>
	<ul class="grid mx-auto max-w-5xl md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
		{#each data.ingredients as ingredient}
			<li
				class="{ingredient.name.toLocaleLowerCase().includes(filterTerm.toLowerCase())
					? ''
					: 'hidden'} w-48"
			>
				<label for={ingredient.name} class="flex items-center space-x-2">
					<input class="checkbox" type="checkbox" checked={ingredient.inStock} />
					<span>{ingredient.name}</span>
				</label>
			</li>
		{/each}
	</ul>
</div>
