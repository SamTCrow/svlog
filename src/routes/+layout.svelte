<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		Drawer,
		LightSwitch,
		getDrawerStore,
		type PopupSettings,
		popup,
		ListBox,
		ListBoxItem
	} from '@skeletonlabs/skeleton';
	import type { AfterNavigate } from '@sveltejs/kit';
	import { afterNavigate } from '$app/navigation';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import PageTransition from './transition.svelte';
	import * as config from '$lib/config';

	export let data;

	let popupHoverTags: PopupSettings = {
		event: 'click',
		target: 'popupHoverTags',
		placement: 'right',
		closeQuery: '.listbox-item'
	};

	let popupHoverCat: PopupSettings = {
		event: 'click',
		target: 'popupHoverCat',
		placement: 'right',
		closeQuery: '.listbox-item'
	};

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

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

<Drawer>
	<nav class="flex flex-col gap-4 items-center h-full justify-around">
		<ul class="flex flex-col gap-4 text-center space-y-4">
			<li>
				<button class="btn btn-sm" use:popup={popupHoverTags}>
					<span class="capitalize text-lg">Tags</span>
					<span>&rarr;</span>
				</button>
				<div class="card w-48 shadow-xl py-2" data-popup="popupHoverTags">
					<ListBox rounded="rounded-none">
						{#each data.tags as tag}
							<a href="/tags/{tag.toLowerCase()}">
								<ListBoxItem bind:group={popupHoverTags} name="medium" value={tag}
									>{tag}</ListBoxItem
								>
							</a>
						{/each}
					</ListBox>
					<div class="arrow bg-surface-100-800-token" />
				</div>
			</li>
			<li>
				<button class="btn btn-sm" use:popup={popupHoverCat}>
					<span class="capitalize text-lg">Categories</span>
					<span>&rarr;</span>
				</button>
				<div class="card w-48 shadow-xl py-2" data-popup="popupHoverCat">
					<ListBox rounded="rounded-none">
						{#each data.categories as cat}
							<a href="/categories/{cat.toLowerCase()}">
								<ListBoxItem bind:group={popupHoverCat} name="medium" value={cat}>
									{cat}
								</ListBoxItem>
							</a>
						{/each}
					</ListBox>
					<div class="arrow bg-surface-100-800-token" />
				</div>
			</li>
			<li>
				<a href="/about" class="btn btn-sm capitalize text-lg"> About </a>
			</li>
		</ul>
		<div><LightSwitch /></div>
	</nav>
</Drawer>
<AppShell>
	<svelte:fragment slot="header"
		><Header
			on:openDrawer={drawerOpen}
			tags={data.tags}
			categories={data.categories}
		/></svelte:fragment
	>
	<svelte:fragment slot="sidebarLeft"></svelte:fragment>
	<svelte:fragment slot="sidebarRight"></svelte:fragment>
	<!-- (pageHeader) -->
	<svelte:fragment slot="pageHeader"></svelte:fragment>
	<!-- Router Slot -->
	<PageTransition url={data.url}>
		<slot />
	</PageTransition>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
	<!-- (footer) -->
	<svelte:fragment slot="footer"></svelte:fragment>
</AppShell>
