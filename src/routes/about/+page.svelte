<script>
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	import MissingIcon from '$lib/components/MissingIcon.svelte';
	import { goto } from '$app/navigation';

	function onComplete() {
		goto('/ingredients');
	}
</script>

<svelte:head>
    <title>mise | About</title> 
</svelte:head>

<div class="p-8 md:max-w-lg mx-auto">
	<h1 class="h1 text-center py-8">
		How to use <span class="code text-2xl">mise</span>:
	</h1>
	<Stepper
		on:complete={onComplete}
		badge="variant-outline-primary text-lg px-3"
		active="variant-filled-primary text-lg"
	>
		<Step regionHeader="h-8" regionContent="h-32">
			<svelte:fragment slot="navigation"><span></span></svelte:fragment>
			<svelte:fragment slot="header"
				>Stock your <span class="code text-xl">ingredients</span> :</svelte:fragment
			>
			<li class="justify-center flex flex-col gap-6 pt-10 text-center">
				<div>
					<input class="checkbox" disabled type="checkbox" />
					<span class="px-2">Out of Stock</span>
				</div>
				<div>
					<input class="checkbox" disabled type="checkbox" checked />
					<span class="px-2">In Stock</span>
				</div>
			</li>
		</Step>
		<Step regionHeader="h-8" regionContent="h-32">
			<svelte:fragment slot="header"
				>See which <span class="code text-xl">recipes</span> you can make</svelte:fragment
			>
			<li class="justify-center flex flex-col gap-6 pt-10 text-center">
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
			<svelte:fragment slot="header"><span></span></svelte:fragment>
			<div class="flex items-center justify-center">
				<h1 class="text-2xl font-bold">Mix and Enjoy!</h1>
			</div>
		</Step>
	</Stepper>
</div>
