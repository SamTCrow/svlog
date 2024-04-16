import { getCards } from '$lib/getCards.js';
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

/**
 * Handle GET request to retrieve card information based on the query parameter.
 *
 * @param {Object} url - The URL object containing the query parameter.
 * @param {Object} platform - The platform object for handling the request.
 * @return {JSON} The card information in JSON format.
 */
export async function GET({ url, platform }) {
	const query = url.searchParams.get('q');
	if (query) {
		try {
			if (!platform) {
				error(502, 'No platform!!');
			}
			const cache = await platform.env.MAGIC_CARD.get(query);

			if (cache === null) {
				const card = await getCards(query);
				await platform.env.MAGIC_CARD.put(query, JSON.stringify(card));
				return json(card);
			}
			return json(JSON.parse(cache));
		} catch (e) {
			error(404, 'Something went wrong.');
		}
	}
}
