<script>
	export let data;
</script>

<h1>{data.fullRecipe.recipe.name}</h1>
<ul>
	{#each data.fullRecipe.ingredients as { ingredient, quantity }}
		<li>{quantity} oz {ingredient.name}</li>
	{/each}
</ul>
