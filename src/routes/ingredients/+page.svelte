<script lang="ts">
	export let data;
	let filterTerm: string = '';

	function stockChange(id: string) {
		const form: HTMLFormElement = document.getElementById(id) as HTMLFormElement
		form.requestSubmit()
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
				<form id={id} action="?/stock" method="post">
					<label for={name} class="flex items-center space-x-2">
						<input type="text" hidden name="id" value={id} />
						<input
							name="inStock"
							class="checkbox"
							type="checkbox"
							on:change={() => stockChange(id)}
							checked={inStock}
						/>
						<span class="uppercase">{name}</span>
					</label>
				</form>
			</li>
		{/each}
		<a href="/ingredients/new" class="btn variant-filled">New</a>
	</ul>
</div>
