<script lang="ts">
	import PostCard from '$lib/components/postCard.svelte';
	import * as config from '$lib/config';
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="mx-auto max-w-5xl w-full mt-4 px-2">
	<ul class=" list-none mx-auto space-y-4">
		{#each data.posts as post}
			<li>
				<PostCard {post} />
			</li>
		{/each}
	</ul>
</section>
