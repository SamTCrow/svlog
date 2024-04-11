<script lang="ts">
	import { formatDate } from '$lib/utils/formatDate';

	export let data;
	const { meta } = data;
	const readingTime = '2m';
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="max-w-5xl prose dark:prose-invert w-full mx-auto mt-4">
	<div class="flex justify-between text-sm">
		<time datetime={meta.date}>{formatDate(meta.date)}</time>
		<span> · {readingTime} read</span>
	</div>
	<h1>{meta.title}</h1>
	<img src={meta.image} alt={meta.title} class="mx-auto w-full" />
	<div>
		<svelte:component this={data.content} />
	</div>
	<div class="space-x-2">
		{#each meta.tags as tag}
			<a href="/tags/{tag}" class="chip variant-soft hover:variant-filled">{tag}</a>
		{/each}
	</div>
</article>
