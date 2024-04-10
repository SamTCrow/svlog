import type { Post } from '$lib/types';
import { json } from '@sveltejs/kit';

async function getPosts() {
	let posts: Post[] = [];

	const files = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in files) {
		const slug = path.replace('/src/posts/', '').replace('.md', '');
		const file = files[path];
		if (file && typeof file === 'object' && 'metadata' in file) {
			const { metadata } = (await file) as { metadata: Omit<Post, 'slug'> };

			const post = {
				...metadata,
				slug
			} satisfies Post;
			post.published && posts.push(post);
		}

		posts = posts.sort(
			(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
		);
	}

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
