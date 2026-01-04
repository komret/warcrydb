<!-- DropdownButton.svelte -->
<script lang="ts">
	import Button from './Button.svelte';
	import type { Snippet } from 'svelte';

	type DropdownItem = {
		key: string;
		label: string;
		title?: string;
		disabled?: boolean | (() => boolean);
		onclick: () => void;
		icon?: string;
	};

	type Props = {
		items: DropdownItem[];
		variant?: 'primary' | 'secondary' | 'danger';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		class?: string;
		children: Snippet;
	};

	let {
		items,
		variant = 'secondary',
		size,
		disabled = false,
		class: className = '',
		children
	}: Props = $props();

	let showDropdown = $state(false);

	// Handle click outside to close dropdown
	$effect(() => {
		if (showDropdown) {
			const handleClickOutside = (event: MouseEvent) => {
				const target = event.target as Element;
				const dropdown = target.closest('.relative');
				if (!dropdown) {
					showDropdown = false;
				}
			};

			document.addEventListener('click', handleClickOutside);

			return () => document.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<div class="relative {className}">
	<Button
		{variant}
		{size}
		{disabled}
		onclick={() => (showDropdown = !showDropdown)}
		class="flex items-center gap-2"
	>
		{@render children()}
		Options
		<svg
			class="ml-1 h-4 w-4 transition-transform {showDropdown ? 'rotate-180' : ''}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</Button>
	{#if showDropdown}
		<div
			class="absolute left-0 z-10 mt-2 w-48 rounded-md border border-gray-600 bg-gray-800 shadow-lg"
		>
			<div class="py-1">
				{#each items as item}
					<button
						class="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 disabled:opacity-50"
						disabled={typeof item.disabled === 'function' ? item.disabled() : item.disabled}
						onclick={() => {
							item.onclick();
							showDropdown = false;
						}}
						title={item.title}
					>
						{#if item.icon}
							{@html item.icon}
						{/if}
						{item.label}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	/* Additional styles if needed */
</style>
