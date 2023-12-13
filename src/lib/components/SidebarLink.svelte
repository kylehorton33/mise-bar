<script lang="ts">
	import { AppRailAnchor } from '@skeletonlabs/skeleton';
	export let route: string;
</script>

{#if route == 'ingredients'}
	<AppRailAnchor selected href="/ingredients" title="Ingredients">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Ingredients</span>
	</AppRailAnchor>
{:else if route == 'recipes'}
	<AppRailAnchor href="/recipes" title="Recipes">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Recipes</span>
	</AppRailAnchor>
{:else if route == 'about'}
	<AppRailAnchor href="/about" title="About">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>About</span>
	</AppRailAnchor>
{/if}
