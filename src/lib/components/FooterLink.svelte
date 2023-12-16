<script lang="ts">
	import { TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import Icon from '$lib/icons/Icon.svelte';

	export let route: string;
</script>

<TabAnchor selected={$page.url.pathname == `/${route}`} href="/{route}" title={route}>
	<svelte:fragment slot="lead">
		<div class="flex justify-center">
			<Icon icon={route} />
		</div>
	</svelte:fragment>
	<span class="capitalize">{route}</span>
</TabAnchor>
