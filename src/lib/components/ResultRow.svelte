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
		variant="primary"
		onclick={onReset}
		class="flex items-center gap-2 {hasActiveFilters ? '' : 'invisible'}"
		title="Reset filters"
	>
		<span>Reset</span>
	</Button>
</div>
