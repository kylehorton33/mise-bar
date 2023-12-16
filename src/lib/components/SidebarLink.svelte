<script lang="ts">
	import { AppRailAnchor } from '@skeletonlabs/skeleton';
	//@ts-ignore
	import { page } from '$app/stores';
	import Icon from '$lib/icons/Icon.svelte';
	export let route: string;
</script>

<AppRailAnchor selected={$page.url.pathname == `/${route}`} href="/{route}" title={route}>
	<svelte:fragment slot="lead">
		<div class="flex justify-center">
			<Icon icon={route} />
		</div>
	</svelte:fragment>
	<span class="capitalize">{route}</span>
</AppRailAnchor>
