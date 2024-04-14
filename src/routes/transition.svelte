<script lang="ts">
	import { fade } from 'svelte/transition';
	export let url: string;
</script>

{#key url}
	<div
		class="transition h-full"
		in:fade={{ duration: 150, delay: 150 }}
		out:fade={{ duration: 150 }}
	>
		<slot />
	</div>
{/key}
