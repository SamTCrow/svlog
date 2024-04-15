<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils/formatDate';

	export let post: Post;
</script>

<div class="card no-underline overflow-hidden p-4 block card-hover">
	<a href="/posts/{post.slug}" title={post.title}>
		<section class="flex justify-between items-center card-header">
			<h2 class="h2">{post.title}</h2>
			<h3 class="h5"><a href="/categories/{post.category}">{post.category}</a></h3>
		</section>
		<section class="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
			{#if post.image}
				<img src={post.image} class="mx-auto rounded-md max-w-full" alt={post.title} />
			{:else}
				<div />
			{/if}

			<section class="justify-between flex flex-col gap-4">
				<p class="lg:text-right h4">{post.description}</p>
				<div class="flex lg:flex-col justify-between lg:items-end items-center lg:gap-2">
					<p class="text-sm">{formatDate(post.date)}</p>
					<div class="space-x-2">
						{#each post.tags as tag}
							<a href="/tags/{tag}" class="chip variant-soft hover:variant-filled">{tag}</a>
						{/each}
					</div>
				</div>
			</section>
		</section>
	</a>
</div>
