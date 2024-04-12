export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: string[];
	published: boolean;
	category: string;
	image?: string;
	readingTime: {
		text: string;
	};
};
