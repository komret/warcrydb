<script lang="ts">
	import Button from './Button.svelte';
	import type { Snippet } from 'svelte';
	import chevronDownIcon from '../../assets/icons/chevron-down.svg?raw';

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
	let dropdownContainer = $state<HTMLElement>();

	// Handle click outside to close dropdown
	$effect(() => {
		if (!showDropdown || !dropdownContainer) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownContainer && !dropdownContainer.contains(event.target as Node)) {
				showDropdown = false;
			}
		};

		document.addEventListener('click', handleClickOutside, { capture: true });
		return () => document.removeEventListener('click', handleClickOutside, { capture: true });
	});
</script>

<div class="relative {className}" bind:this={dropdownContainer}>
	<Button
		{variant}
		{size}
		{disabled}
		onclick={(event: MouseEvent) => {
			event.stopPropagation();
			showDropdown = !showDropdown;
		}}
		class="flex items-center gap-2"
	>
		{@render children()}
		{@html chevronDownIcon.replace(
			'<svg',
			`<svg class="ml-1 h-4 w-4 transition-transform ${showDropdown ? 'rotate-180' : ''}"`
		)}
	</Button>
	{#if showDropdown}
		<div
			class="absolute left-0 z-10 mt-2 w-30.5 rounded-md border border-gray-600 bg-gray-800 shadow-lg"
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
