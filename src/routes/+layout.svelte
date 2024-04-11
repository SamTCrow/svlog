<script lang="ts">
	import '../app.postcss';
	import { AppShell, Drawer, LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { AfterNavigate } from '@sveltejs/kit';
	import { afterNavigate } from '$app/navigation';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import * as config from '$lib/config';

	initializeStores();
	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({ width: 'w-2/3' });
	}
	function drawerClose(): void {
		drawerStore.close();
	}

	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
</script>

<Drawer
	><nav>
		<ul class="flex gap-4 flex-col mx-auto w-full text-center mt-4">
			{#each Object.entries(config.links) as [name, path]}
				<li class="hover:bg-surface-50-900-token hover:opacity-80 w-full px-4 py-2 mx-auto">
					<a href={path} on:click={drawerClose}>{name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="m-4"><LightSwitch class="mx-auto" /></div>
</Drawer>
<AppShell>
	<svelte:fragment slot="header"><Header on:openDrawer={drawerOpen} /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft"></svelte:fragment>
	<svelte:fragment slot="sidebarRight"></svelte:fragment>
	<!-- (pageHeader) -->
	<svelte:fragment slot="pageHeader"></svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
	<!-- (footer) -->
	<svelte:fragment slot="footer"></svelte:fragment>
</AppShell>
