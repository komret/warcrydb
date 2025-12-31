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

	// Available cards for each section (not in deck)
	const availableArmyCards = $derived(() => {
		return cards.filter(
			(card) => (card.type === 'Unit' || card.type === 'Attachment') && !deck.has(card.id)
		);
	});

	const availableActionCards = $derived(() => {
		return cards.filter(
			(card) =>
				(card.type === 'Tactic' || card.type === 'Command' || card.type === 'Reaction') &&
				!deck.has(card.id)
		);
	});

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
	<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
		<DeckSection
			title="Army Deck"
			cards={armyCards()}
			total={armyTotal()}
			{getCard}
			{onRemoveCard}
			{onAddCard}
			availableCards={availableArmyCards()}
		/>

		<DeckSection
			title="Action Deck"
			cards={actionCards()}
			total={actionTotal()}
			{getCard}
			{onRemoveCard}
			{onAddCard}
			availableCards={availableActionCards()}
		/>
	</div>
</Box>
