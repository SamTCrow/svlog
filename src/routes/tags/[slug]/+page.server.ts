import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types.js';
export const prerender = 'auto';
export async function load({ params, fetch }) {
	try {
		const res = await fetch(`/api/posts`);
		const posts: Post[] = await res.json();
		const postTags = posts.filter((post) => post.tags.includes(params.slug));
		return { postTags };
	} catch (e) {
		error(404, 'Not found');
	}
}
