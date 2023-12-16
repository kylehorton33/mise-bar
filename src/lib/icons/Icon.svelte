<script lang="ts">
	import Bottle from './Bottle.svelte';
	import Drink from './Drink.svelte';
	import Info from './Info.svelte';

	export let icon: string;
</script>

{#if icon === 'ingredients'}
	<Bottle />
{:else if icon === 'recipes'}
	<Drink />
{:else if icon === 'about'}
	<Info />
{/if}
