import { getPosts } from './getPost';

export async function getTags() {
	const posts = await getPosts();
	const tags = new Set<string>();

	posts.forEach((post) => {
		post.tags.forEach((tag) => {
			tags.add(tag);
		});
	});

	return Array.from(tags);
}
