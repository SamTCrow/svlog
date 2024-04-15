<script lang="ts">
	import type { Card } from '$lib/types';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	export let cardName: string;

	let card: Card;

	onMount(async () => {
		const response = await fetch(`https://crowinger.com/api/card?q=${cardName}`, {
			mode: 'no-cors'
		});
		if (!response.ok) {
			return cardName;
		}
		card = await response.json();
	});

	const popupCard: PopupSettings = {
		event: 'hover',
		target: 'popupCard',
		placement: 'right'
	};
</script>

{#if card}
	{#await card}
		{cardName}
	{:then card}
		<span use:popup={popupCard}><a href={card.url} title={cardName}>{card.title}</a></span>

		<img
			src={card.img}
			alt={cardName}
			loading="lazy"
			class=" lg:max-w-[15rem] max-w-[5rem]"
			data-popup="popupCard"
		/>
	{/await}
{:else}
	<span>{cardName}</span>
{/if}
