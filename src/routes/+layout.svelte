<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Header, Footer, Sidebar } from '$lib/components';

	import { ingredients, recipes, ingredientLines } from '$lib/store';

	export let data;

	ingredients.set(data.ingredients);
	recipes.set(data.recipes);
	ingredientLines.set(data.ingredientLines);
</script>

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>

	<svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>

	<div id="route">
		<slot />
	</div>

	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
