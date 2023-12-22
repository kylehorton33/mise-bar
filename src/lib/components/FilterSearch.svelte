<script lang="ts">
	import Search from '$lib/icons/Search.svelte';

	export let filterTerm: string;
	export let placeholder: string = 'Search...';
</script>

<div class="w-72 mx-auto">
	<div
		class="mx-auto input-group input-group-divider grid-cols-[auto_1fr_auto]"
	>
		<div class="input-group-shim">
			<Search />
		</div>
		<form>
			<input
				type="search"
				{placeholder}
				bind:value={filterTerm}
				autocorrect="on"
			/>
		</form>
	</div>
</div>
