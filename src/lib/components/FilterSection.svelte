<script lang="ts">
	type Props = {
		resultsCount: number;
		onReset: () => void;
		children: any;
		selectedCardName?: string;
		selectedCardId?: string | null;
		onCardClick?: (cardId: string) => void;
		hasActiveFilters?: boolean;
	};

	let {
		resultsCount,
		onReset,
		children,
		selectedCardName,
		selectedCardId,
		onCardClick,
		hasActiveFilters = false
	}: Props = $props();
</script>

<!-- Filters Section -->
<div class="mb-4 rounded-lg bg-gray-800 p-4 shadow-xl">
	{@render children()}
</div>

<!-- Results Count -->
<div class="mb-4 flex items-center justify-between">
	<div class="text-sm text-gray-400">
		{#if selectedCardName && !!selectedCardId && onCardClick}
			{resultsCount} result{resultsCount !== 1 ? 's' : ''} for
			<button
				onclick={() => onCardClick(selectedCardId)}
				class="cursor-pointer text-blue-400 transition-colors hover:text-blue-300"
			>
				{selectedCardName}
			</button>
		{:else}
			{resultsCount} result{resultsCount !== 1 ? 's' : ''}
		{/if}
	</div>
	<button
		onclick={onReset}
		class="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none {hasActiveFilters
			? ''
			: 'invisible'}"
	>
		<span>Reset</span>
	</button>
</div>
