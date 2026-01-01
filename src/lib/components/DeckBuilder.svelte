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

	// Deck validation
	const isDeckValid = $derived(() => {
		// Check minimum card counts
		if (armyTotal() < 30 || actionTotal() < 30) {
			return false;
		}

		// Check faction compatibility
		const allCardsInDeck = Array.from(deck.entries())
			.map(([cardId]) => getCard(cardId))
			.filter(Boolean);
		const factionsInDeck = new Set(allCardsInDeck.map((card) => card!.faction));

		// Invalid if both Hordes of Darkness and Grand Alliance are present
		if (factionsInDeck.has('Hordes of Darkness') && factionsInDeck.has('Grand Alliance')) {
			return false;
		}

		return true;
	});

	const validationMessage = $derived(() => {
		if (armyTotal() < 30) {
			return `Army deck needs ${30 - armyTotal()} more cards`;
		}
		if (actionTotal() < 30) {
			return `Action deck needs ${30 - actionTotal()} more cards`;
		}

		const allCardsInDeck = Array.from(deck.entries())
			.map(([cardId]) => getCard(cardId))
			.filter(Boolean);
		const factionsInDeck = new Set(allCardsInDeck.map((card) => card!.faction));

		if (factionsInDeck.has('Hordes of Darkness') && factionsInDeck.has('Grand Alliance')) {
			return 'Cannot mix Hordes of Darkness and Grand Alliance cards';
		}

		return 'Deck is valid';
	});
</script>

<Box>
	<div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
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

	<div class="flex items-center justify-between">
		<span class="text-sm font-medium {isDeckValid() ? 'text-green-400' : 'text-red-400'}">
			{validationMessage()}
		</span>
	</div>
</Box>
