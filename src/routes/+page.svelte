<script lang="ts">
	import PostCard from '$lib/components/postCard.svelte';

	export let data;
</script>

<section class="mx-auto max-w-5xl w-full mt-4">
	<ul class=" list-none mx-auto space-y-4">
		{#each data.posts as post}
			<li>
				<PostCard {post} />
			</li>
		{/each}
	</ul>
</section>
