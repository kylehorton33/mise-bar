<script>
	import MissingIcon from "$lib/components/MissingIcon.svelte";

</script>
<div class="mt-8 grid gap-4 justify-center">
	<h1 class="h1 text-center">How to use:</h1>
	<hr class="my-2" />
	<ol class="list-decimal grid gap-8 px-12">
		<li class="text-xl">
			Mark which <a href="/ingredients" class="code">ingredients</a> you have
		</li>
		<li class="justify-center flex gap-12">
			<div>
				<input class="checkbox" disabled type="checkbox" />
				<span>Out of Stock</span>
			</div>
			<div>
				<input class="checkbox" disabled type="checkbox" checked />
				<span>In Stock</span>
			</div>
		</li>
		<hr />
		<li class="text-xl">
			Search <a href="/recipes" class="code">recipes</a> to see what you can make
		</li>
		<li class="justify-center flex gap-12">
			<div>
				<MissingIcon missing={2} position="mx-2" />
				<span>Missing 2</span>
			</div>
			<div>
				<MissingIcon missing={0} position="mx-2" />
				<span>Ready to make</span>
			</div>
		</li>
		<hr />
		<li class="text-xl">Enjoy!</li>
	</ol>
</div>
