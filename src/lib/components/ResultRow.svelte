<script lang="ts">
	import Button from './Button.svelte';

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
	<Button
		variant="danger"
		onclick={onReset}
		class="flex items-center gap-2 {hasActiveFilters ? '' : 'invisible'}"
		title="Reset filters"
	>
		<svg class="h-4 w-4" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M12 4V2l4 4-4 4V6a8 8 0 1 0 8 8h-2a6 6 0 1 1-6-6z"
			/>
		</svg> <span>Reset</span>
	</Button>
</div>
