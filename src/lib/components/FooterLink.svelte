<script lang="ts">
	import { TabAnchor } from '@skeletonlabs/skeleton';
	export let route: string;
</script>

{#if route == 'ingredients'}
	<TabAnchor selected href="/ingredients">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Ingredients</span>
	</TabAnchor>
{:else if route == 'recipes'}
	<TabAnchor href="/recipes">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Recipes</span>
	</TabAnchor>
{:else if route == 'about'}
	<TabAnchor href="/about">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>About</span>
	</TabAnchor>
{/if}
