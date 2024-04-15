<script lang="ts">
	import type { Card } from '$lib/types';
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
</script>

{#await card}
	{cardName}
{:then card}
	<div class="w-full mx-auto">
		<a href={card.url} title={cardName} class="mx-auto">
			<img src={card.img} alt={cardName} loading="lazy" class="max-w-sm mx-auto" />
		</a>
	</div>
{/await}
