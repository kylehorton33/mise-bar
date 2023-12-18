<script>
	import { page } from '$app/stores';
	console.log($page.data)
</script>

<div class="mt-12 text-center">
	{#if $page.error}
		<h1 class="h1">{$page.error.message}</h1>
		<p class="h3">
			No recipe found matching the name <span class="code">{$page.params.slug}</span>
		</p>
		<hr class="my-8" />
		<a href="/recipes" class="btn variant-filled-secondary">Take me back to recipes</a>
	{/if}
</div>
