import { getCards } from '$lib/getCards.js';
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const prerender = false;

export async function GET({ url, platform }) {
	const query = url.searchParams.get('q');

	try {
		if (!platform) {
			error(404, 'No platform!!');
		}

		const value = platform.env.MAGIC_CARD.get(query);

		if (value === null && query !== null) {
			const card = await getCards(query);
			platform.env.MAGIC_CARD.put(query, card);
			return json(card);
		}
		return json(value);
	} catch (e) {
		error(404, 'Something went wrong.');
	}
}
