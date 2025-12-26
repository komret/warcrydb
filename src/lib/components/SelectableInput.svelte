<script lang="ts">
	import AutocompleteInput from './AutocompleteInput.svelte';
	import type { Keyword } from '$lib/data/cards';

	type Item = {
		id: string;
		name: string;
	};

	type BaseProps = {
		mode: 'single' | 'multi';
		items: Item[];
		label?: string;
		value?: string;
	};

	type SingleSelectionProps = BaseProps & {
		mode: 'single';
		selectedItem: Item | null;
		onSelect: (item: Item) => void;
		onClear: () => void;
	};

	type MultiSelectionProps = BaseProps & {
		mode: 'multi';
		selectedItems: Keyword[];
		operators: ('|' | '&')[];
		onAddItem: (item: Keyword) => void;
		onRemoveItem: (item: Keyword) => void;
		onToggleOperator: (index: number) => void;
		onInputChange: (value: string) => void;
	};

	type Props = SingleSelectionProps | MultiSelectionProps;

	let { mode, items, label, value = $bindable(''), ...rest }: Props = $props();

	let showSuggestions = $state(false);
	let selectedSuggestionIndex = $state(0);

	// Filtered suggestions for multi mode
	const filteredSuggestions = $derived.by(() => {
		if (!value.trim()) return [];
		const input = value.toLowerCase();
		let filtered = items.filter((item) => item.name.toLowerCase().includes(input));

		// In multi mode, exclude already selected items
		if (mode === 'multi') {
			const selectedNames = (rest as MultiSelectionProps).selectedItems;
			filtered = filtered.filter((item) => !selectedNames.includes(item.name as any));
		}

		return filtered.slice(0, 10);
	});

	// Handle input changes
	function handleInput() {
		if (mode === 'single') {
			// For single mode, clear selection when typing
			if ((rest as SingleSelectionProps).selectedItem) {
				(rest as SingleSelectionProps).onClear();
			}
		} else {
			// For multi mode, update the input value
			(rest as MultiSelectionProps).onInputChange(value);
		}
	}

	// Handle item selection
	function handleSelect(item: Item) {
		if (mode === 'single') {
			(rest as SingleSelectionProps).onSelect(item);
		} else {
			(rest as MultiSelectionProps).onAddItem(item.name as Keyword);
			value = ''; // Clear input after selection
		}
	}

	// Handle keyboard navigation for both modes
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === 'Tab') {
			e.preventDefault();
			if (filteredSuggestions.length > 0) {
				handleSelect(filteredSuggestions[selectedSuggestionIndex]);
			}
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			selectedSuggestionIndex = Math.min(
				selectedSuggestionIndex + 1,
				filteredSuggestions.length - 1
			);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, 0);
		} else if (e.key === 'Escape') {
			showSuggestions = false;
		}
	}

	// Select item for multi mode
	function selectItem(item: Item) {
		(rest as MultiSelectionProps).onAddItem(item.name as Keyword);
		value = ''; // Clear input after selection
		showSuggestions = false;
		selectedSuggestionIndex = 0;
	}

	// Get display value for single mode
	function getSingleDisplayValue(): string {
		if (mode === 'single' && (rest as SingleSelectionProps).selectedItem) {
			return (rest as SingleSelectionProps).selectedItem!.name;
		}
		return value;
	}

	// Check if single mode has selection
	function hasSingleSelection(): boolean {
		return mode === 'single' && (rest as SingleSelectionProps).selectedItem !== null;
	}
</script>

{#if label}
	<label for="selectable-input" class="mb-2 block text-sm font-medium">{label}</label>
{/if}

<!-- Autocomplete input -->
<div id="selectable-input" class="relative">
	{#if mode === 'multi'}
		<!-- Multi-selection input with tags inside -->
		<div
			class="flex min-h-[36px] flex-wrap items-center rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500"
		>
			<!-- Selected items and operators as tags -->
			{#each (rest as MultiSelectionProps).selectedItems as item, index}
				<button
					onclick={() => (rest as MultiSelectionProps).onRemoveItem(item)}
					title="Remove {item}"
					class="mr-1 cursor-pointer text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
					aria-label="Remove {item}"
				>
					{item}
				</button>
				{#if index < (rest as MultiSelectionProps).selectedItems.length - 1}
					<span class="mr-1 inline-flex items-center">
						<button
							onclick={() => (rest as MultiSelectionProps).onToggleOperator(index)}
							class="flex h-6 w-6 cursor-pointer items-center justify-center rounded bg-gray-600 text-sm font-medium text-white transition-colors hover:bg-gray-500 focus:bg-gray-500 focus:outline-none"
							title="Click to toggle between AND (&) and OR (|)"
							aria-label="Toggle operator between {item} and next keyword"
						>
							{(rest as MultiSelectionProps).operators[index] === '|' ? '|' : '&'}
						</button>
					</span>
				{/if}
			{/each}
			<!-- Input field -->
			<input
				type="text"
				bind:value
				onkeydown={handleKeydown}
				onfocus={() => (showSuggestions = true)}
				onblur={() => setTimeout(() => (showSuggestions = false), 200)}
				oninput={() => {
					showSuggestions = true;
					selectedSuggestionIndex = 0;
					handleInput();
				}}
				class="min-w-[100px] flex-1 border-0 bg-transparent px-0 py-0 text-white placeholder-gray-400 focus:ring-0 focus:outline-none"
			/>
			<!-- Clear button -->
			{#if (rest as MultiSelectionProps).selectedItems.length > 0 || value}
				<button
					onclick={() => {
						// Clear all selected items and input value
						(rest as MultiSelectionProps).selectedItems.forEach((item) => {
							(rest as MultiSelectionProps).onRemoveItem(item);
						});
						value = '';
					}}
					class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
					aria-label="Clear all keywords"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			{/if}
		</div>
	{:else}
		<!-- Single selection input -->
		<div
			class="flex min-h-[36px] flex-wrap items-center rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500"
		>
			{#if hasSingleSelection()}
				<!-- Selected item as clickable text -->
				<button
					onclick={() => {
						if (mode === 'single') {
							(rest as SingleSelectionProps).onClear();
						}
					}}
					title="Remove {(rest as SingleSelectionProps).selectedItem!.name}"
					class="cursor-pointer text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
					aria-label="Remove {(rest as SingleSelectionProps).selectedItem!.name}"
				>
					{(rest as SingleSelectionProps).selectedItem!.name}
				</button>
			{:else}
				<!-- Input field for typing -->
				<input
					type="text"
					bind:value
					onkeydown={handleKeydown}
					onfocus={() => (showSuggestions = true)}
					onblur={() => setTimeout(() => (showSuggestions = false), 200)}
					oninput={() => {
						showSuggestions = true;
						selectedSuggestionIndex = 0;
						handleInput();
					}}
					class="min-w-[100px] flex-1 border-0 bg-transparent px-0 py-0 text-white placeholder-gray-400 focus:ring-0 focus:outline-none"
				/>
			{/if}
			<!-- Clear button -->
			{#if hasSingleSelection() || value}
				<button
					onclick={() => {
						// Clear selected item and input value
						if (mode === 'single' && hasSingleSelection()) {
							(rest as SingleSelectionProps).onClear();
						}
						value = '';
					}}
					class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
					aria-label="Clear selection"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			{/if}
		</div>
	{/if}

	<!-- Suggestions dropdown -->
	{#if showSuggestions && filteredSuggestions.length > 0}
		<div
			class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-600 bg-gray-700 shadow-lg"
		>
			{#each filteredSuggestions as suggestion, index}
				<button
					type="button"
					onclick={() => handleSelect(suggestion)}
					class="w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-600 focus:bg-gray-600 focus:outline-none {index ===
					selectedSuggestionIndex
						? 'bg-gray-600'
						: ''}"
				>
					{suggestion.name}
				</button>
			{/each}
		</div>
	{/if}
</div>
