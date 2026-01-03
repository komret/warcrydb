<script lang="ts">
	type Props = {
		resultsCount: number;
		isFiltering?: boolean;
		onReset: () => void;
		hasActiveFilters?: boolean;
	};

	let { resultsCount, isFiltering = false, onReset, hasActiveFilters = false }: Props = $props();
</script>

<div class="flex items-center justify-between">
	<div class="text-sm text-gray-400">
		{isFiltering ? 'Loading...' : `${resultsCount} result${resultsCount !== 1 ? 's' : ''}`}
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
