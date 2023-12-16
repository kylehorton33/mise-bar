<script lang="ts">
	import { stockList } from '$lib/store';
	export let filterTerm: string;
	export let ingredient: Ingredient;

	function stockChange(name: string) {
		$stockList[name] = !$stockList[name];
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
			checked={$stockList[ingredient.name]}
		/>
		<span class="uppercase">{ingredient.name}</span>
	</label>
</li>
