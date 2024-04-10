<script lang="ts">
	import * as config from '$lib/config';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
  const openDrawer = () => {
        dispatch("openDrawer");
    }
</script>

<header
	class="flex justify-between lg:p-4 p-2 mb-4 text-lg font-medium shadow-md bg-surface-100-800-token"
>
	<div>
		<a href="/" class="text-xl">{config.title}</a>
	</div>
	<button class="md:hidden btn btn-sm" on:click={openDrawer}>
		<span>
			<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
				<rect width="100" height="20" />
				<rect y="30" width="100" height="20" />
				<rect y="60" width="100" height="20" />
			</svg>
		</span>
	</button>
	<nav class="md:flex gap-4 hidden">
		<ul class="flex gap-4">
			{#each Object.entries(config.links) as [name, path]}
				<li><a href={path} class="hover:underline hover:opacity-80">{name}</a></li>
			{/each}
		</ul>
		<div><LightSwitch /></div>
	</nav>
</header>
