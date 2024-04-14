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

export type Card = {
	img: string;
	url: string;
	title: string;
};

export type ScryfallCard = {
	name: string;
	image_uris: {
		large: string;
	};
	scryfall_uri: string;
};
