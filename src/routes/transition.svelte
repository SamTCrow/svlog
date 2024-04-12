<script lang="ts">
	import { blur } from 'svelte/transition';
	export let url: string;
</script>

{#key url}
	<div class="transition" in:blur>
		<slot />
	</div>
{/key}
