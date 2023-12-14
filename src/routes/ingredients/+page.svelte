<script lang="ts">
	import { enhance } from '$app/forms';
	export let data;
	let filterTerm: string = '';
	let loading = false;

	function stockChange(id: string) {
		const form: HTMLFormElement = document.getElementById(id) as HTMLFormElement;
		form.requestSubmit();
	}

	function enhancedSubmit() {
		loading = true;

		return () => {
			loading = false;
		};
	}
</script>

<div class="grid gap-4">
	<h1 class="text-center pt-6">Ingredients</h1>
	<div class="w-72 mx-auto input-group input-group-divider grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim">(i)</div>
		<input type="search" placeholder="Search..." bind:value={filterTerm} />
	</div>
	<ul class="grid mx-auto max-w-5xl md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
		{#each data.ingredients as { id, name, inStock }}
			<li
				class="{name.toLocaleLowerCase().includes(filterTerm.toLowerCase()) ? '' : 'hidden'} w-48"
			>
				<form {id} action="?/stock" use:enhance={enhancedSubmit} method="post">
					<label for={name} class="flex items-center space-x-2">
						<input type="text" hidden name="id" value={id} />
						<input
							name="inStock"
							class="checkbox disabled:opacity-25"
							type="checkbox"
							on:change={() => stockChange(id)}
							checked={inStock}
							disabled={loading}
						/>
						<span class="uppercase">{name}</span>
					</label>
				</form>
			</li>
		{/each}
		<a href="/ingredients/new" class="btn variant-filled">New</a>
	</ul>
</div>
