import { dev } from '$app/environment';

export const title = "The Crow's nest";
export const desription = 'A simple svelte blog';
export const url = dev ? 'http://localhost:5173/' : 'https://crowinger.com/';

export const links = {
	About: '/About',
	Posts: '/Posts',
	Tags: '/Tags',
	Contacts: '/Contacts',
	RSS: '/RSS'
};
