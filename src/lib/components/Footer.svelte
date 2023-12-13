<script lang="ts">
	import { TabGroup } from '@skeletonlabs/skeleton';
	import FooterLink from './FooterLink.svelte';
</script>

<TabGroup
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full lg:hidden"
>
	<FooterLink route="ingredients"/>
	<FooterLink route="recipes"/>
	<FooterLink route="about"/>
	
</TabGroup>
