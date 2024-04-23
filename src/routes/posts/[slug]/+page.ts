import type { Post } from '$lib/types';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata as Post,
		};
	} catch (e) {
		error(404, 'Not found');
	}
}
