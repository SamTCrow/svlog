<script lang="ts">
	import { getAuthor } from '$lib/utils/authors';
	import { formatDate } from '$lib/utils/formatDate';
	import { Avatar } from '@skeletonlabs/skeleton';
	import ToC from '$lib/components/toc.svelte';
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
<div class="flex">
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

		<div class="gap-2 flex justify-end items-center mt-8">
			{#each meta.tags as tag}
				<a href="/tags/{tag}" class="chip variant-soft hover:variant-filled">{tag}</a>
			{/each}
		</div>

		<div class="flex items-center gap-2 flex-col mt-8">
			<Avatar src={author.image} width="w-48" rounded="rounded-full" /><span>{author.name}</span>
		</div>
	</article>
	<div class="hidden 2xl:block pt-10 -ml-60 mr-8">
		<aside class="sticky hidden w-48 ml-8 xl:block top-8" aria-label="Table of Contents">
			<ToC post={meta} />
		</aside>
	</div>
</div>
