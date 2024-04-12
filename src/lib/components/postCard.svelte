<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils/formatDate';

	export let post: Post;

	const postUrl = `/posts/${post.slug}`;
</script>

<a href={postUrl} class="card no-underline overflow-hidden p-4 block hover:shadow-lg">
	<div class="flex justify-between items-center card-header">
		<h2 class="h2">{post.title}</h2>
		<h4 class="h4"><a href="/categories/{post.category}">{post.category}</a></h4>
	</div>
	<section class="p-4 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 lg:gap-8">
		{#if post.image}
			<img src={post.image} class="mx-auto pb-4 rounded-md" alt={post.title} />
		{/if}
		<p class="lg:text-right">{post.description}</p>
	</section>
	<div class="card-footer justify-between flex items-center">
		<p class="text-sm">{formatDate(post.date)}</p>
		<div class="space-x-2">
			{#each post.tags as tag}
				<a href="/tags/{tag}" class="chip variant-soft hover:variant-filled">{tag}</a>
			{/each}
		</div>
	</div>
</a>
