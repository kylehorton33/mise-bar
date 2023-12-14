<script>
	let ingredientLines = [
		{ quantity: 0.75, ingredient: '' },
		{ quantity: 0.75, ingredient: '' }
	];

    function newIngredientLine() {
        ingredientLines = [...ingredientLines, { quantity: 1, ingredient: ''}]
    }
</script>

<form action="/recipes?/create" method="POST" class="grid gap-4 px-8 max-w-lg mx-auto">
	<h3 class="text-xl mt-8 text-center">Create a New Recipe</h3>
	<label class="label">
		<span>Name</span>
		<input name="name" class="input" type="text" placeholder="Input" />
	</label>

	<label class="label space-y-2">
		<span>Ingredients</span>
		{#each ingredientLines as line, idx}
			<div class="grid grid-cols-8 gap-2">
				<input name="ingredientLines[{idx}][quantity]" class="input col-span-3" type="number" min="0" step="0.25" bind:value={line.quantity} />
				<select name="ingredientLines[{idx}][ingredient]" class="select col-span-5">
					<option value="" disabled selected>Ingredient {idx+1}</option>
					<option value="gin">GIN</option>
					<option value="tonic">TONIC</option>
				</select>
			</div>
		{/each}
		<button on:click|preventDefault={newIngredientLine} class="btn variant-filled-success">+</button>
	</label>

	<label class="label">
		<span>Instructions</span>
		<textarea
            name="instructions"
			class="textarea"
			rows="4"
			placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
		/>
	</label>
	<button type="submit" class="btn variant-filled">Submit</button>
</form>
