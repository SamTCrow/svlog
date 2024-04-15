import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types.js';
import { capitalize } from '$lib/utils/capitalize.js';

export async function load({ params, fetch }) {
	try {
		const res = await fetch(`/api/posts`);
		const posts: Post[] = await res.json();
		const postTags = posts.filter((post) => post.tags.includes(params.slug));
		const tagName = capitalize(params.slug);
		return { postTags, tagName };
	} catch (e) {
		error(404, 'Not found');
	}
}
