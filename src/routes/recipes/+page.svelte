<script lang="ts">
	export let data;
	let filterTerm: string = '';

	function listIngredients(ingredients: IngredientLineData[]) {
		return ingredients.map((i) => i.ingredient?.name).join(' | ');
	}
</script>

<div class="grid gap-4">
	<h1 class="text-center pt-6">Recipes</h1>
	<div class="w-72 mx-auto input-group input-group-divider grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim">(i)</div>
		<input type="search" placeholder="Search..." bind:value={filterTerm} />
	</div>
	<ul class="grid md:grid-cols-2 2xl:grid-cols-3 mx-auto gap-4 max-h-[32rem] overflow-y-scroll">
		{#each data.recipeList as { name, slug, ingredients, missing }}
			<li class={name.toLocaleLowerCase().includes(filterTerm.toLowerCase()) ? '' : 'hidden'}>
				<a href="/recipes/{slug}">
					<div class="block card card-hover p-2 w-72 h-32 mx-auto relative rounded-lg">
						<span
							class="badge {missing
								? 'variant-soft-warning'
								: 'variant-filled-success'} absolute top-3 right-3">{missing}</span
						>
						<header class="card-header uppercase">{name}</header>
						<section class="p-4 text-xs">
							{listIngredients(ingredients)}
						</section>
					</div>
				</a>
			</li>
		{/each}
		<div class="text-center">
			<a href="/recipes/new" class="btn variant-filled">New</a>
		</div>
	</ul>
</div>
