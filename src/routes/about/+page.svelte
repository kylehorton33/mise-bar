<script>
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	import MissingIcon from '$lib/components/MissingIcon.svelte';
	import { goto } from '$app/navigation';

	function onComplete() {
		goto('/ingredients');
	}
</script>

<div class="p-8 md:max-w-lg mx-auto">
	<h1 class="h1 text-center py-8">How to use <span class="code text-2xl">mise</span>:</h1>
	<Stepper
		start={1}
		on:complete={onComplete}
		badge="variant-outline-primary text-lg px-3"
		active="variant-filled-primary text-lg"
	>
		<Step regionHeader="h-8" regionContent="h-32">
			<svelte:fragment slot="header"
				>Mark which <span class="code text-xl">ingredients</span> you have</svelte:fragment
			>
			<li class="justify-center flex gap-12 pt-12">
				<div>
					<input class="checkbox" disabled type="checkbox" />
					<span>Out of Stock</span>
				</div>
				<div>
					<input class="checkbox" disabled type="checkbox" checked />
					<span>In Stock</span>
				</div>
			</li>
		</Step>
		<Step regionHeader="h-8" regionContent="h-32">
			<svelte:fragment slot="header"
				>See which <span class="code text-xl">recipes</span> you can make</svelte:fragment
			>
			<li class="justify-center flex gap-12 h-32 pt-12">
				<div>
					<MissingIcon missing={2} position="mx-2" />
					<span>Missing 2 Ingredients</span>
				</div>
				<div>
					<MissingIcon missing={0} position="mx-2" />
					<span>Ready to make</span>
				</div>
			</li>
		</Step>
		<Step regionHeader="h-8" regionContent="h-32">
			<svelte:fragment slot="header"
				><span></span></svelte:fragment
			>
			<div class="flex items-center justify-center">
				<h1 class="h1">Mix and Enjoy!</h1>
			</div>
		</Step>
	</Stepper>
</div>
