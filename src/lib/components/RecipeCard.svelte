<script lang="ts">

	export let filterTerm: string;

	export let recipe: Recipe;

	function listIngredients(ingredients: IngredientLine[]) {
		return ingredients.map((i) => i.ingredient?.name.toLowerCase()).join(' | ');
	}
</script>

<li class={recipe.name.toLocaleLowerCase().includes(filterTerm.toLowerCase()) ? '' : 'hidden'}>
	<a href="/recipes/{recipe.slug}">
		<div class="block card card-hover p-2 w-72 h-32 mx-auto relative rounded-lg">
			<span
				class="badge {0 ? 'variant-soft-warning' : 'variant-filled-success'} absolute top-3 right-3"
				>{0}</span
			>
			<header class="card-header uppercase">{recipe.name}</header>
			{#if recipe.ingredients}
				<section class="p-4 text-xs">
					{listIngredients(recipe.ingredients)}
				</section>
			{/if}
		</div>
	</a>
</li>
