<script lang="ts">
	import type { Card } from '$lib/types';
	import { onMount } from 'svelte';

	export let cardName: string;

	let card: Card;

	onMount(async () => {
		const response = await fetch(`https://crowinger.com/api/card?q=${cardName}`);
		if (!response.ok) {
			console.log(response);
		}
		card = await response.json();
	});
</script>

{#if card}
	{#await card}
		{cardName}
	{:then card}
		<div class="w-full mx-auto">
			<a href={card.url} title={cardName} class="mx-auto">
				<img src={card.img} alt={cardName} loading="lazy" class="lg:max-w-sm mx-auto w-full" />
			</a>
		</div>
	{/await}
{:else}
	<p>{cardName}</p>
{/if}
