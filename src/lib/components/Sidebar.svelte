<script lang="ts">
	import { AppRail } from '@skeletonlabs/skeleton';
	import SidebarLink from './SidebarLink.svelte';
</script>

<AppRail class="hidden lg:block">
	<SidebarLink route="ingredients" />
	<SidebarLink route="recipes" />
	<SidebarLink route="about" />
</AppRail>
