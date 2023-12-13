<script lang="ts">
	import { AppRailAnchor } from '@skeletonlabs/skeleton';
	//@ts-ignore
	import { page } from '$app/stores';
	export let route: string;
</script>

<AppRailAnchor selected={$page.url.pathname == `/${route}`} href="/{route}" title={route}>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<span class="capitalize">{route}</span>
</AppRailAnchor>