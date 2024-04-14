import { getPosts } from '$lib/getPost';
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
export const prerender = false;
export async function GET() {
	try {
		const posts = await getPosts();
		return json(posts);
	} catch (e) {
		error(404, 'Not found');
	}
}
