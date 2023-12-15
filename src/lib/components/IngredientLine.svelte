<script lang="ts">
	import { enhance } from '$app/forms';

	export let filterTerm: string;
	export let id: string;
	export let name: string;
	export let inStock: boolean;
    export let loading: boolean;

	

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

<li class="{name.toLocaleLowerCase().includes(filterTerm.toLowerCase()) ? '' : 'hidden'} w-48">
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
