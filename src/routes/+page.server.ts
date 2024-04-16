import type { Post } from '$lib/types';
export const prerender = true;
/**
 * Loads posts from the API and returns them as an array of Post objects.
 *
 * @param {Object} options - An object containing the fetch function.
 * @param {Function} options.fetch - The fetch function used to make the API request.
 * @return {Promise<Object>} A promise that resolves to an object containing the posts array.
 */
export async function load({ fetch }) {
	const res = await fetch('/api/posts');
	const posts: Post[] = await res.json();
	return { posts };
}
