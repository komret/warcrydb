<script lang="ts">
	import type { Card as CardType, Type } from '$lib/data/cards';
	import DeckSection from './DeckSection.svelte';
	import Box from './Box.svelte';

	type Props = {
		deck: Map<string, number>;
		cards: CardType[];
		onRemoveCard: (cardId: string) => void;
		onAddCard: (cardId: string) => void;
	};

	let { deck, cards, onRemoveCard, onAddCard }: Props = $props();

	// Get card by ID
	function getCard(cardId: string): CardType | undefined {
		return cards.find((card) => card.id === cardId);
	}

	// Helper function to get filtered and sorted cards
	function getFilteredCards(cardTypes: Type[]): [string, number][] {
		return Array.from(deck.entries())
			.filter(([cardId]) => {
				const card = getCard(cardId);
				return card && cardTypes.includes(card.type);
			})
			.sort(([a], [b]) => {
				const cardA = getCard(a);
				const cardB = getCard(b);
				if (!cardA || !cardB) return 0;
				return cardA.name.localeCompare(cardB.name);
			});
	}

	// Calculate deck sections
	const armyCards = $derived(() => getFilteredCards(['Unit', 'Attachment']));
	const actionCards = $derived(() => getFilteredCards(['Tactic', 'Command', 'Reaction']));

	const armyTotal = $derived(() => {
		return armyCards().reduce((sum: number, [, count]: [string, number]) => sum + count, 0);
	});

	const actionTotal = $derived(() => {
		return actionCards().reduce((sum: number, [, count]: [string, number]) => sum + count, 0);
	});

	const totalCards = $derived(() => armyTotal() + actionTotal());

	// Check if deck is valid (at least 30 cards each)
	const isValidDeck = $derived(() => armyTotal() >= 30 && actionTotal() >= 30);
</script>

<Box>
	<div class="mb-4 flex items-center justify-between">
		<h2 class="text-xl font-bold text-white">Deck Builder</h2>
		<div class="text-sm text-gray-400">
			Total: {totalCards()} cards
			<span class="ml-4 text-red-400">
				{#if !isValidDeck()}
					(Need {Math.max(0, 30 - armyTotal())} more Army, {Math.max(0, 30 - actionTotal())} more Action)
				{:else}
					<span class="text-green-400">✓ Valid deck</span>
				{/if}
			</span>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
		<DeckSection
			title="Army Deck"
			cards={armyCards()}
			total={armyTotal()}
			required={30}
			{getCard}
			{onRemoveCard}
			{onAddCard}
		/>

		<DeckSection
			title="Action Deck"
			cards={actionCards()}
			total={actionTotal()}
			required={30}
			{getCard}
			{onRemoveCard}
			{onAddCard}
		/>
	</div>
</Box>
