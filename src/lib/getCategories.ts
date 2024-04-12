import { getPosts } from './getPost';
export async function getCategories() {
	const posts = await getPosts();
	const categories = new Set<string>();
	posts.forEach((post) => {
		categories.add(post.category);
	});
	return Array.from(categories);
}
