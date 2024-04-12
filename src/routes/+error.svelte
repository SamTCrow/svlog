<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="h-full grid items-center">
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>
