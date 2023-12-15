<script lang="ts">
	export let filterTerm: string;
	export let ingredient: Ingredient;

	let inStock = false;

	function stockChange(name: string) {
		//stock change local storage
	}
</script>

<li
	class="{ingredient.name.toLocaleLowerCase().includes(filterTerm.toLowerCase())
		? ''
		: 'hidden'} w-48 pl-1"
>
	<label for={ingredient.name} class="flex items-center space-x-2">
		<input
			id={ingredient.name}
			class="checkbox disabled:opacity-25"
			type="checkbox"
			on:change={() => stockChange(ingredient.name)}
			checked={inStock}
		/>
		<span class="uppercase">{ingredient.name}</span>
	</label>
</li>
