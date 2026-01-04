<script lang="ts">
	import type { Snippet } from 'svelte';

	type ButtonGroupItem = {
		key: string;
		label: string;
		title?: string;
		disabled?: boolean | (() => boolean);
		onclick: () => void;
		icon?: string;
	};

	type Variant = 'light' | 'dark';

	type Props = {
		items: ButtonGroupItem[];
		variant?: Variant;
		icon?: Snippet;
		class?: string;
	};

	let { items, variant = 'light', icon, class: className = '' }: Props = $props();

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
	{#each items as item}
		<button
			class="flex items-center justify-center border-l border-gray-500 bg-gray-600 px-3 py-2 text-sm font-medium text-gray-900 text-white transition-colors hover:bg-gray-700 focus:relative focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50"
			disabled={typeof item.disabled === 'function' ? item.disabled() : item.disabled}
			title={item.title}
			onclick={item.onclick}
		>
			{#if item.icon}
				{@html item.icon}
			{/if}
			<span class="ml-1">{item.label}</span>
		</button>
	{/each}
</div>
