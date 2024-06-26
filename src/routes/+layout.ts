import { getTags } from '$lib/getTags';
import { getCategories } from '$lib/getCategories';
export const prerender = true;
export async function load({ url }) {
	return {
		url: url.pathname,
		tags: await getTags(),
		categories: await getCategories()
	};
}
