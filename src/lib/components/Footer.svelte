<script lang="ts">
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
</script>

<TabGroup
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full lg:hidden"
>
	<TabAnchor selected href="/ingredients">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Ingredients</span>
	</TabAnchor>
	<TabAnchor href="/recipes">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Recipes</span>
	</TabAnchor>
	<TabAnchor href="/about">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>About</span>
	</TabAnchor>
	<!-- ... -->
</TabGroup>
