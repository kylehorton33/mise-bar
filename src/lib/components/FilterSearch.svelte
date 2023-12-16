<script lang="ts">
	import Search from '$lib/icons/Search.svelte';

	export let filterTerm: string;
</script>

<div class="w-72 mx-auto">
	<div class="mx-auto input-group input-group-divider grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim">
			<Search />
		</div>
		<input type="search" placeholder="Search..." bind:value={filterTerm} />
	</div>
</div>
