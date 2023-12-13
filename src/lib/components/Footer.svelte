<script lang="ts">
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
    let currentTile: number = 0;
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
	<TabAnchor selected href="/">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
	<TabAnchor href="/">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
	<TabAnchor href="/">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
	<!-- ... -->
</TabGroup>
