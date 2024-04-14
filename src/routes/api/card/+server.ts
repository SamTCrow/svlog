import { getCards } from '$lib/getCards.js';
import type { Card } from '$lib/types.js';
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const prerender = false;

export async function GET({ url, platform }) {
	const query = url.searchParams.get('q');
	if (query) {
		try {
			if (!platform) {
				error(502, 'No platform!!');
			}
			const cache: Card = await platform.env.MAGIC_CARD.get(query);
			if (cache === null) {
				const card = await getCards(query);
				await platform.env.MAGIC_CARD.put(query, card);
				return json(card);
			}
			return json(cache);
		} catch (e) {
			error(404, 'Something went wrong.');
		}
	}
}
