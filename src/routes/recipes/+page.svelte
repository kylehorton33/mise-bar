<script lang="ts">
	export let data;
</script>

<h1 class="text-center pt-6 pb-10">Recipes</h1>

<ul class="grid mx-auto max-w-5xl gap-4 justify-center">
	{#each data.recipes as { name, slug }}
		<li>
			<a href="/recipes/{slug}">{name}</a>
		</li>
	{/each}
</ul>
