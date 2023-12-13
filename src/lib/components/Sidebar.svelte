<script lang="ts">
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	let currentTile: number = 0;
</script>

<AppRail class="hidden lg:block">
	<AppRailAnchor selected href="/ingredients" title="Ingredients">
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <span>Ingredients</span>
    </AppRailAnchor>
    <AppRailAnchor href="/recipes" title="Recipes">
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <span>Recipes</span>
    </AppRailAnchor>
	<AppRailAnchor href="/about" title="About">
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <span>About</span>
    </AppRailAnchor>
</AppRail>
