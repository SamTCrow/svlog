import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types.js';
import { capitalize } from '$lib/utils/capitalize.js';

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
