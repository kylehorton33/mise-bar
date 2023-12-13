<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Header, Footer, Sidebar } from '$lib/components';
</script>

<AppShell>
	
	<!-- pageHeader -->
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>

	<!-- sidebarLeft -->
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>


	<!-- Router Slot -->
	<slot />
	
	<!-- footer -->
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>
