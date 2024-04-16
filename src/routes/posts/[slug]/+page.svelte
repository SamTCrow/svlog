<script lang="ts">
	import { getAuthor } from '$lib/utils/authors';
	import { formatDate } from '$lib/utils/formatDate';
	import { Avatar } from '@skeletonlabs/skeleton';

	export let data;

	const { meta } = data;
	const readingTime = meta.readingTime.text;
	const author = getAuthor(meta.author);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta name="description" content={data.meta.description} />
</svelte:head>

<article class="max-w-4xl prose dark:prose-invert w-full mx-auto mt-4 px-2">
	<div class="flex justify-between text-sm mb-2">
		<time datetime={meta.date}>{formatDate(meta.date)}</time>
		<span>{readingTime}</span>
	</div>
	<h1 class="h1">{meta.title}</h1>
	{#if meta.image}
		<img src={meta.image} alt={meta.title} class="mx-auto w-full px-2q" />
	{/if}
	<div>
		<svelte:component this={data.content} />
	</div>
	<div class="flex justify-between items-center">
		<div class="flex items-center gap-3">
			<Avatar src={author.image} width="w-12" rounded="rounded-full" /><span>{author.name}</span>
		</div>
		<div class="space-x-2">
			{#each meta.tags as tag}
				<a href="/tags/{tag}" class="chip variant-soft hover:variant-filled">{tag}</a>
			{/each}
		</div>
	</div>
</article>
