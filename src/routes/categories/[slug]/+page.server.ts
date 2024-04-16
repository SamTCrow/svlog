import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types.js';
import { capitalize } from '$lib/utils/capitalize.js';

/**
 * Loads posts from the API and returns a filtered list of posts based on the category slug.
 *
 * @param {Object} options - An object containing the params and fetch functions.
 * @param {Object} options.params - An object containing the slug parameter.
 * @param {Function} options.fetch - The fetch function used to make the API request.
 * @return {Promise<Object>} A promise that resolves to an object containing the filtered posts and category name.
 * @throws {Error} Throws a 404 error if the API request fails.
 */
export async function load({ params, fetch }) {
	try {
		const res = await fetch(`/api/posts`);
		const posts: Post[] = await res.json();
		const postCategory = posts.filter((post) => post.category.toLowerCase() === params.slug);
		const categoryName = capitalize(params.slug);
		return { postCategory, categoryName };
	} catch (e) {
		error(404, 'Not found');
	}
}
