<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		icon?: Snippet;
		class?: string;
	};

	let { children, icon, class: className = '' }: Props = $props();

	let baseClasses = $derived(
		'inline-flex items-center rounded-lg border border-gray-500 bg-gray-600 overflow-hidden'
	);

	let combinedClasses = $derived(`${baseClasses} ${className}`);
</script>

<div class={combinedClasses}>
	{#if icon}
		<div class="flex items-center justify-center px-2 py-1">
			{@render icon()}
		</div>
	{/if}
	{@render children()}
</div>
