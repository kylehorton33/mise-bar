<script lang="ts">
	export let data;
</script>

<h1 class="text-center pt-6 pb-10">Recipes</h1>

<ul class="grid md:grid-cols-2 2xl:grid-cols-3 mx-auto gap-4">
	{#each data.recipes as { name, slug }}
		<li>
			<a href="/recipes/{slug}">
				<div class="block card card-hover p-2 w-72 h-32 mx-auto">
					<header class="card-header uppercase">{name}</header>
					<section class="p-4">(content)</section>
				</div>
			</a>
		</li>
	{/each}
</ul>
