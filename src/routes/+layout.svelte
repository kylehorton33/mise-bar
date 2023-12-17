<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Header, Footer, Sidebar } from '$lib/components';

	import {ingredients, recipes, ingredientLines } from '$lib/store'

	export let data;
	
	ingredients.set(data.ingredients)
	recipes.set(data.recipes)
	ingredientLines.set(data.ingredientLines)

	//console.log($ingredients)
	//console.log($recipes)
	//console.log($ingredientLines)
</script>

<AppShell>
	<!-- pageHeader -->
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>

	<!-- sidebarLeft -->
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>

	<!-- Router Slot -->
	<div id="route">
		<slot />
	</div>

	<!-- footer -->
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>
