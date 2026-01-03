<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="mb-4 rounded-lg bg-gray-800 p-3 shadow-xl">
	{@render children()}
</div>
