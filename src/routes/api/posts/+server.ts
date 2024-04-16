import { getPosts } from '$lib/getPost';
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

/**
 * Retrieves a list of posts from the server and returns them as a JSON response.
 *
 * @return {Promise<Response>} A promise that resolves to a JSON response containing the list of posts.
 * @throws {Error} If the request fails, an error with status code 404 and message 'Not found' is thrown.
 */
export async function GET() {
	try {
		const posts = await getPosts();
		return json(posts);
	} catch (e) {
		error(404, 'Not found');
	}
}
