import type { Card, ScryfallCard } from './types';

export async function getCards(query: string): Promise<Card> {
	const response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${query}`);

	if (!response.ok) {
		throw new Error('Card not found');
	}

	const card: ScryfallCard = await response.json();

	return {
		img: card.image_uris.large,
		url: card.scryfall_uri,
		title: card.name
	} satisfies Card;
}
