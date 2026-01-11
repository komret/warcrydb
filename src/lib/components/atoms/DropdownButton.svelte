<script lang="ts">
	import { clickOutside } from '$lib/utils/clickOutside';

	type MenuItem = {
		label: string;
		icon?: string;
		onclick: () => void;
		disabled?: boolean;
		variant?: 'default' | 'danger';
	};

	type Props = {
		label: string;
		items: MenuItem[];
		variant?: 'primary' | 'secondary' | 'danger';
		iconOnly?: boolean;
	};

	let { label, items, variant = 'secondary', iconOnly = false }: Props = $props();

	let isOpen = $state(false);

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function handleItemClick(item: MenuItem) {
		if (!item.disabled) {
			item.onclick();
			isOpen = false;
		}
	}

	function handleClickOutside() {
		isOpen = false;
	}

	const variantClasses = {
		primary: 'bg-blue-600 hover:bg-blue-700 text-white',
		secondary: 'bg-gray-700 hover:bg-gray-600 text-gray-200',
		danger: 'bg-red-600 hover:bg-red-700 text-white'
	};
</script>

<div class="relative" use:clickOutside={handleClickOutside}>
	<button
		type="button"
		class="flex items-center gap-2 rounded text-sm font-medium transition-colors {iconOnly
			? 'p-2'
			: 'px-3 py-2'} {variantClasses[variant]}"
		onclick={toggleDropdown}
		title={iconOnly ? label : undefined}
	>
		{#if iconOnly}
			<svg
				class="h-5 w-5 transition-transform {isOpen ? 'rotate-180' : ''}"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		{:else}
			<span>{label}</span>
			<svg
				class="h-4 w-4 transition-transform {isOpen ? 'rotate-180' : ''}"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		{/if}
	</button>

	{#if isOpen}
		<div
			class="absolute right-0 z-50 mt-1 rounded-md border border-gray-700 bg-gray-800 py-1 shadow-lg"
		>
			{#each items as item}
				<button
					type="button"
					class="flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition-colors {item.disabled
						? 'cursor-not-allowed opacity-50'
						: item.variant === 'danger'
							? 'text-red-400 hover:bg-gray-700'
							: 'text-gray-200 hover:bg-gray-700'}"
					onclick={() => handleItemClick(item)}
					disabled={item.disabled}
				>
					{#if item.icon}
						<span class="h-4 w-4">{@html item.icon}</span>
					{/if}
					<span>{item.label}</span>
				</button>
			{/each}
		</div>
	{/if}
</div>
