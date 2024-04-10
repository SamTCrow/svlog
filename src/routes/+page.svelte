<script lang="ts">
	import { formatDate } from '$lib/utils/formatDate';

	export let data;

	console.log(data);
</script>

<section>
	<ul>
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
