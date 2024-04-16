interface Authors {
  [key: string]: {
    name: string;
    image: string;
  };
}

export const authors: Authors = {
	sam: {
		name: 'Sam T. Crow',
		image: '/avatars/sam.webp'
	}
};

export function getAuthor(name: string) {
  return authors[name];
}