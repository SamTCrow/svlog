import { getCards } from '$lib/getCards.js';
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

			const value = platform.env.MAGIC_CARD.get(query);

			if (value === null) {
				const card = await getCards(query);
				platform.env.MAGIC_CARD.put(query, card);
				return json(card);
			} else {
				return json(value);
			}
		} catch (e) {
			error(404, 'Something went wrong.');
		}
	}
}
