<script lang="ts">
	export let tags: string[];
	export let categories: string[];

	import * as config from '$lib/config';
	import {
		LightSwitch,
		ListBox,
		ListBoxItem,
		popup,
		type PopupSettings
	} from '@skeletonlabs/skeleton';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const openDrawer = () => {
		dispatch('openDrawer');
	};

	let popupHoverTags: PopupSettings = {
		event: 'click',
		target: 'popupHoverTags',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	let popupHoverCat: PopupSettings = {
		event: 'click',
		target: 'popupHoverCat',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};
</script>

<header
	class="flex justify-between lg:p-4 p-2 text-lg font-medium shadow-md bg-surface-100-800-token items-center"
>
	<div>
		<a href="/" class="text-xl">{config.title}</a>
	</div>
	<button class="md:hidden btn btn-sm" on:click={openDrawer} title="Open menu">
		<span>
			<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
				<rect width="100" height="20" />
				<rect y="30" width="100" height="20" />
				<rect y="60" width="100" height="20" />
			</svg>
		</span>
	</button>
	<nav class="md:flex gap-4 hidden items-center">
		<ul class="flex gap-4">
			<li>
				<button class="btn btn-sm" use:popup={popupHoverTags}>
					<span class="capitalize text-lg">Tags</span>
					<span>↓</span>
				</button>
				<div class="card w-48 shadow-xl py-2" data-popup="popupHoverTags">
					<ListBox rounded="rounded-none">
						{#each tags as tag}
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
					<span>↓</span>
				</button>
				<div class="card w-48 shadow-xl py-2" data-popup="popupHoverCat">
					<ListBox rounded="rounded-none">
						{#each categories as cat}
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
				<a href="/rss.xml" class="btn btn-sm capitalize text-lg"> RSS </a>
			</li>
		</ul>
		<div><LightSwitch /></div>
	</nav>
</header>
