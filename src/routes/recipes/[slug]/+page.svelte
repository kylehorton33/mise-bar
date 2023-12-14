<script>
	export let data;
	import img from '$lib/images/naked-and-famous.jpg';
</script>

<div class="grid gap-4 mt-12 justify-center">
	<h1 class="text-xl text-center">{data.recipe.name}</h1>
	<hr />
	<ul class="list-disc list-inside w-72">
		{#each data.recipe.ingredients as { ingredient, quantity }}
			<li class={ingredient.inStock ? '' : 'text-error-800'}>{quantity} oz {ingredient.name}</li>
		{/each}
	</ul>
	<p class="w-72">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, eos? Unde illum aliquam, dolores
		harum voluptas quo, blanditiis repellendus deserunt, libero nam aspernatur? Provident quo quis
		suscipit repudiandae nemo neque.
	</p>
	<img src={img} class="h-48 mx-auto rounded-lg" alt={data.recipe.name} />
</div>
