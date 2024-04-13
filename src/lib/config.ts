import { dev } from '$app/environment';
import { getCategories } from './getCategories';
import { getTags } from './getTags';

export const title = "The Crow's nest";
export const description = 'Programming, magic and videogames';
export const url = dev ? 'http://localhost:5173/' : 'https://svlog.pages.dev';

export const links = {
	About: '/About',
	Tags: '/Tags',
	Categories: '/Categories',
	Contacts: '/Contacts'
};

export const tags = getTags();
export const categories = getCategories();
