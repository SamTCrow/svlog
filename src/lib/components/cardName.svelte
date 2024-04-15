<script lang="ts">
	import type { Card } from '$lib/types';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	export let cardName: string;

	let card: Promise<Card>;

	onMount(async () => {
		const response = await fetch(`https://crowinger.com/api/card?q=${cardName}`);
		if (!response.ok) {
			return cardName;
		}
		card = response.json();
	});

	const popupCard: PopupSettings = {
		event: 'hover',
		target: 'popupCard',
		placement: 'right'
	};
</script>

{#await card}
	{cardName}
{:then card}
	<span use:popup={popupCard}><a href={card.url} title={cardName}>{card.title}</a></span>

	<img
		src={card.img}
		alt={cardName}
		loading="lazy"
		class=" max-w-[15rem] overflow-visible"
		data-popup="popupCard"
	/>
{/await}
