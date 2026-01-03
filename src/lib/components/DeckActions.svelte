<script lang="ts">
	type Props = {
		onClearDeck: () => void;
		hasCards: boolean;
	};

	let { onClearDeck, hasCards }: Props = $props();
</script>

<div class="flex items-center justify-between">
	<div></div>
	<button
		onclick={onClearDeck}
		class="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none {hasCards
			? ''
			: 'invisible'}"
	>
		<span>Reset</span>
	</button>
</div>
