<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="h-full grid items-center text-center w-full">
	<h1 class="h1">{$page.status}: {$page.error?.message}</h1>
</div>
