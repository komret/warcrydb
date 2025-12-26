<script lang="ts">
	type Item = {
		id: string;
		name: string;
	};

	type Props = {
		items: Item[];
		value: string;
		placeholder?: string;
		label?: string;
		onSelect: (item: Item) => void;
		onInput?: () => void;
	};

	let {
		items,
		value = $bindable(''),
		placeholder = 'Search...',
		label,
		onSelect,
		onInput
	}: Props = $props();

	let showSuggestions = $state(false);
	let selectedSuggestionIndex = $state(0);

	// Filtered suggestions
	const filteredSuggestions = $derived.by(() => {
		if (!value.trim()) return [];
		const input = value.toLowerCase();
		return items.filter((item) => item.name.toLowerCase().includes(input)).slice(0, 10);
	});

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			if (filteredSuggestions.length > 0) {
				selectItem(filteredSuggestions[selectedSuggestionIndex]);
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

	function selectItem(item: Item) {
		value = item.name;
		showSuggestions = false;
		onSelect(item);
	}
</script>

{#if label}
	<label for="autocomplete-input" class="mb-2 block text-sm font-medium">{label}</label>
{/if}
<div class="relative">
	<input
		id="autocomplete-input"
		type="text"
		bind:value
		{placeholder}
		onkeydown={handleKeydown}
		onfocus={() => (showSuggestions = true)}
		onblur={() => setTimeout(() => (showSuggestions = false), 200)}
		oninput={() => {
			showSuggestions = true;
			selectedSuggestionIndex = 0;
			onInput?.();
		}}
		class="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
	/>
	{#if showSuggestions && filteredSuggestions.length > 0}
		<div
			class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-600 bg-gray-700 shadow-lg"
		>
			{#each filteredSuggestions as suggestion, index}
				<button
					type="button"
					onclick={() => selectItem(suggestion)}
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
