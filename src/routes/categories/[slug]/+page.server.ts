import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types.js';

export async function load({ params, fetch }) {
	try {
		const res = await fetch(`/api/posts`);
		const posts: Post[] = await res.json();
		const postCategory = posts.filter((post) => post.category.toLowerCase() === params.slug);
		return { postCategory };
	} catch (e) {
		error(404, 'Not found');
	}
}
