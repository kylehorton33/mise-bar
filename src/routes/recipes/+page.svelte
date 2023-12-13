<script lang="ts">
	export let data;
</script>

<h1 class="text-center pt-6 pb-10">Recipes</h1>

<ul class="grid md:grid-cols-2 2xl:grid-cols-3 mx-auto gap-4">
	{#each data.recipes as { name, slug, ingredientLines, missing }}
		<li>
			<a href="/recipes/{slug}">
				<div class="block card card-hover p-2 w-72 h-32 mx-auto relative rounded-lg">
					<span class="badge {missing ? "variant-filled-warning" : "variant-filled-success"} absolute top-3 right-3">{missing}</span>
					<header class="card-header uppercase">{name}</header>
					<section class="p-4 text-xs">{ingredientLines?.map((i) => i.ingredient).join(' | ')}</section>
				</div>
			</a>
		</li>
	{/each}
</ul>
