<form action="/ingredients?/create" method="POST" class="grid gap-4 px-8 max-w-lg mx-auto">
	<h1 class="text-xl text-center mt-8">Create New Ingredient</h1>
	<label class="label">
		<span>Name</span>
		<!-- svelte-ignore a11y-autofocus -->
		<input name="name" class="input" type="text" placeholder="Input" autofocus />
	</label>
	<label class="label">
		<span>Default Unit</span>
		<select name="unit" class="select col-span-5">
			<option value="oz" selected>oz</option>
			<option value="dash">dash</option>
			<option value="whole">whole</option>
		</select>
	</label>
	<label class="label">
		<input name="inStock" class="checkbox" type="checkbox" checked />
		<span>in stock</span>
	</label>
	<button type="submit" class="btn variant-filled mt-4">Submit</button>
</form>
