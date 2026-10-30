<script lang="ts">
	import type { Card as CardType } from '#lib/data/cards.ts';
	import SelectableInput from './SelectableInput.svelte';
	import CardImageModal from './CardImageModal.svelte';
	import DeckItem from './DeckItem.svelte';

	type Props = {
		title: string;
		cards: [string, number, number][]; // [cardId, count, totalCount]
		total: number;
		getCard: (cardId: string) => CardType | undefined;
		onRemoveCard?: (cardId: string) => void;
		onAddCard?: (cardId: string) => void;
		availableCards?: CardType[];
		hasSideboard?: boolean;
		onMoveToSideboard?: (cardId: string) => void;
		onMoveFromSideboard?: (cardId: string) => void;
		layoutDirection?: 'vertical' | 'horizontal';
		minCards: number;
		maxCards?: number;
		readOnly?: boolean;
	};

	let {
		title,
		cards,
		total,
		getCard,
		onRemoveCard,
		onAddCard,
		availableCards,
		hasSideboard = false,
		onMoveToSideboard,
		onMoveFromSideboard,
		layoutDirection = 'vertical',
		minCards,
		maxCards,
		readOnly = false
	}: Props = $props();

	let inputValue = $state('');
	let selectedCardId = $state<string | null>(null);

	// Determine card count display and validation
	const cardCountDisplay = $derived(() => `${total}/${minCards}`);

	const isValidCount = $derived(() => {
		if (minCards !== undefined && total < minCards) return false;
		if (maxCards !== undefined && total > maxCards) return false;
		return true;
	});
</script>

<div class="rounded-lg bg-gray-700 p-3">
	<div class="mb-2 flex items-center justify-between">
		<h3 class="text-lg font-semibold text-white">{title}</h3>
		<span class={`text-sm ${isValidCount() ? 'text-gray-400' : 'text-red-300'}`}>
			{cardCountDisplay()} cards
		</span>
	</div>

	<!-- Card selection input -->
	{#if !readOnly && availableCards}
		<div class="mb-2">
			<SelectableInput
				mode="single"
				items={availableCards.map((card) => ({ id: card.id, name: card.name }))}
				bind:value={inputValue}
				selectedItem={null}
				onSelect={(item) => {
					if (onAddCard) {
						onAddCard(item.id);
						inputValue = '';
					}
				}}
			/>
		</div>
	{/if}

	<div class="space-y-2">
		{#each cards as [cardId, count, totalCount] (cardId)}
			{@const card = getCard(cardId)}
			{#if card}
				<DeckItem
					{cardId}
					{count}
					{totalCount}
					{card}
					{onRemoveCard}
					{onAddCard}
					onOpenModal={(id) => (selectedCardId = id)}
					{hasSideboard}
					{onMoveToSideboard}
					{onMoveFromSideboard}
					{layoutDirection}
					{readOnly}
				/>
			{/if}
		{/each}
	</div>
</div>

<CardImageModal cardId={selectedCardId} onclose={() => (selectedCardId = null)} />
