<script lang="ts">
	import type { Card as CardType } from '$lib/data/cards';
	import SelectableInput from './SelectableInput.svelte';
	import CardImageModal from './CardImageModal.svelte';
	import DeckItem from './DeckItem.svelte';

	type Props = {
		title: string;
		cards: [string, number][];
		total: number;
		getCard: (cardId: string) => CardType | undefined;
		onRemoveCard: (cardId: string) => void;
		onAddCard: (cardId: string) => void;
		availableCards: CardType[];
	};

	let { title, cards, total, getCard, onRemoveCard, onAddCard, availableCards }: Props = $props();

	let inputValue = $state('');
	let selectedCardId = $state<string | null>(null);
</script>

<div class="rounded-lg bg-gray-700 p-4">
	<div class="mb-3 flex items-center justify-between">
		<h3 class="text-lg font-semibold text-white">{title}</h3>
		<span class="text-sm text-gray-400">{total} card{total !== 1 ? 's' : ''}</span>
	</div>

	<!-- Card selection input -->
	<div class="mb-2">
		<SelectableInput
			mode="single"
			items={availableCards.map((card) => ({ id: card.id, name: card.name }))}
			bind:value={inputValue}
			selectedItem={null}
			onSelect={(item) => {
				onAddCard(item.id);
				inputValue = '';
			}}
		/>
	</div>

	<div class="space-y-2">
		{#each cards as [cardId, count]}
			{@const card = getCard(cardId)}
			{#if card}
				<DeckItem
					{cardId}
					{count}
					{card}
					{onRemoveCard}
					{onAddCard}
					onOpenModal={(id) => (selectedCardId = id)}
				/>
			{/if}
		{/each}
	</div>
</div>

<CardImageModal cardId={selectedCardId} onclose={() => (selectedCardId = null)} />
