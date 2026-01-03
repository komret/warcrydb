<script lang="ts">
	import type { Card as CardType, Type } from '$lib/data/cards';
	import DeckSection from './DeckSection.svelte';
	import DeckActions from './DeckActions.svelte';
	import Box from './Box.svelte';
	import { cardMatchesFormat } from '$lib/utils/cardMatchesFormat';

	type Props = {
		deck: Map<string, number>;
		sideboard: Map<string, number>;
		cards: CardType[];
		onRemoveCard: (cardId: string, deckMap?: Map<string, number>) => void;
		onAddCard: (cardId: string, deckMap?: Map<string, number>) => void;
		onMoveToSideboard: (cardId: string) => void;
		onMoveFromSideboard: (cardId: string) => void;
		onClearDeck?: () => void;
	};

	let {
		deck,
		sideboard,
		cards,
		onRemoveCard,
		onAddCard,
		onMoveToSideboard,
		onMoveFromSideboard,
		onClearDeck
	}: Props = $props();

	// Detect layout direction based on screen size
	let layoutDirection: 'vertical' | 'horizontal' = $state('vertical');

	$effect(() => {
		const updateLayout = () => {
			layoutDirection = window.innerWidth >= 1024 ? 'horizontal' : 'vertical';
		};
		updateLayout();
		window.addEventListener('resize', updateLayout);
		return () => window.removeEventListener('resize', updateLayout);
	});

	// Get card by ID
	function getCard(cardId: string): CardType | undefined {
		return cards.find((card) => card.id === cardId);
	}

	// Helper function to get filtered and sorted cards with total counts
	function getFilteredCards(cardTypes: Type[]): [string, number, number][] {
		const result: [string, number, number][] = Array.from(deck.entries())
			.filter(([cardId]) => {
				const card = getCard(cardId);
				return card && cardTypes.includes(card.type);
			})
			.map(([cardId, count]): [string, number, number] => {
				const sideboardCount = sideboard.get(cardId) || 0;
				const totalCount = count + sideboardCount;
				return [cardId, count, totalCount];
			})
			.sort(([a]: [string, number, number], [b]: [string, number, number]) => {
				const cardA = getCard(a);
				const cardB = getCard(b);
				if (!cardA || !cardB) return 0;
				return cardA.name.localeCompare(cardB.name);
			});
		return result;
	}

	// Helper function for sideboard cards
	function getSideboardCards(): [string, number, number][] {
		const result: [string, number, number][] = Array.from(sideboard.entries())
			.filter(([cardId]) => {
				const card = getCard(cardId);
				return card && ['Tactic', 'Command', 'Reaction'].includes(card.type);
			})
			.map(([cardId, count]): [string, number, number] => {
				const deckCount = deck.get(cardId) || 0;
				const totalCount = count + deckCount;
				return [cardId, count, totalCount];
			})
			.sort(([a]: [string, number, number], [b]: [string, number, number]) => {
				const cardA = getCard(a);
				const cardB = getCard(b);
				if (!cardA || !cardB) return 0;
				return cardA.name.localeCompare(cardB.name);
			});
		return result;
	}

	// Calculate deck sections
	const armyCards = $derived(() => getFilteredCards(['Unit', 'Attachment']));
	const actionCards = $derived(() => getFilteredCards(['Tactic', 'Command', 'Reaction']));

	// Check if sideboard should be shown (WA119 present or sideboard has cards)
	const hasSideboard = $derived(() => deck.has('WA119') || sideboard.size > 0);

	// Calculate required sideboard cards (WA119 count * 3)
	const requiredSideboardCards = $derived(() => {
		const wa119Count = deck.get('WA119') || 0;
		return wa119Count * 3;
	});

	// Sideboard cards (only action cards)
	const sideboardCards = $derived(() => {
		return getSideboardCards();
	});

	// Available cards for sideboard (action cards not already in sideboard)
	const availableSideboardCards = $derived(() => {
		return cards.filter(
			(card) => ['Tactic', 'Command', 'Reaction'].includes(card.type) && !sideboard.has(card.id)
		);
	});

	const sideboardTotal = $derived(() => {
		return sideboardCards().reduce(
			(sum: number, [, count]: [string, number, number]) => sum + count,
			0
		);
	});

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
		return armyCards().reduce((sum: number, [, count]: [string, number, number]) => sum + count, 0);
	});

	const actionTotal = $derived(() => {
		return actionCards().reduce(
			(sum: number, [, count]: [string, number, number]) => sum + count,
			0
		);
	});

	// Optimized format determination for deck validation
	function getDeckFormatOptimized(cards: CardType[]): string {
		if (cards.length === 0) return 'Open';

		let isOldSchool = true;
		let isWarcry = true;
		let isAttrition = true;

		for (const card of cards) {
			// Check Old School (skip if already ruled out)
			if (isOldSchool && !cardMatchesFormat(card, 'oldschool')) {
				isOldSchool = false;
			}

			// Check WarCry (skip if already ruled out)
			if (isWarcry && !cardMatchesFormat(card, 'warcry')) {
				isWarcry = false;
			}

			// Check Attrition (skip if already ruled out)
			if (isAttrition && !cardMatchesFormat(card, 'attrition')) {
				isAttrition = false;
			}

			// Early exit if all formats ruled out
			if (!isOldSchool && !isWarcry && !isAttrition) {
				break;
			}
		}

		if (isOldSchool) return 'Old School';
		if (isWarcry) return 'WarCry';
		if (isAttrition) return 'Attrition';
		return 'Open';
	}

	// Deck validation - separate faction and format
	const allCardsInDeck = $derived(() => {
		// Combine deck and sideboard entries
		const allEntries = [...Array.from(deck.entries()), ...Array.from(sideboard.entries())];
		return allEntries
			.filter(([, count]) => count > 0)
			.map(([cardId]) => getCard(cardId))
			.filter((card): card is CardType => card !== undefined);
	});

	const factionsInDeck = $derived(() => {
		return new Set(allCardsInDeck().map((card) => card.faction));
	});

	const isMixedFaction = $derived(() => {
		return (
			factionsInDeck().has('The Hordes of Darkness') && factionsInDeck().has('The Grand Alliance')
		);
	});

	const deckFaction = $derived(() => {
		// Check for mixed factions
		if (isMixedFaction()) {
			return 'Mixed factions';
		}

		// Determine faction
		if (factionsInDeck().has('The Grand Alliance')) {
			return 'The Grand Alliance';
		} else if (factionsInDeck().has('The Hordes of Darkness')) {
			return 'The Hordes of Darkness';
		}

		return 'Neutral';
	});

	const deckFormat = $derived(() => {
		return getDeckFormatOptimized(allCardsInDeck());
	});

	const hasCards = $derived(() => {
		return deck.size > 0 || sideboard.size > 0;
	});
</script>

<Box>
	<div class={`grid grid-cols-1 gap-3 ${hasSideboard() ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
		<DeckSection
			title="Army Deck"
			cards={armyCards()}
			total={armyTotal()}
			{getCard}
			{onRemoveCard}
			{onAddCard}
			availableCards={availableArmyCards()}
			minCards={30}
		/>

		<DeckSection
			title="Action Deck"
			cards={actionCards()}
			total={actionTotal()}
			{getCard}
			{onRemoveCard}
			{onAddCard}
			availableCards={availableActionCards()}
			hasSideboard={hasSideboard()}
			{onMoveToSideboard}
			{layoutDirection}
			minCards={30}
		/>
		{#if hasSideboard()}
			<DeckSection
				title="Sideboard"
				cards={sideboardCards()}
				total={sideboardTotal()}
				{getCard}
				onRemoveCard={(cardId) => onRemoveCard(cardId, sideboard)}
				onAddCard={(cardId) => onAddCard(cardId, sideboard)}
				availableCards={availableSideboardCards()}
				hasSideboard={hasSideboard()}
				{onMoveFromSideboard}
				{layoutDirection}
				minCards={requiredSideboardCards()}
				maxCards={requiredSideboardCards()}
			/>
		{/if}
	</div>

	{#if Array.from(deck.values()).some((count) => count > 0)}
		<div class="mt-2 flex items-center">
			<span class="text-sm font-medium text-gray-300">
				<span class={isMixedFaction() ? 'text-red-300' : 'text-gray-300'}>{deckFaction()}</span>
			</span>
			<span class="mx-2 flex items-center text-gray-300">•</span>
			<span class="text-sm font-medium text-gray-300">
				{deckFormat()}
			</span>
		</div>
	{/if}

	{#if onClearDeck}
		<!-- Deck Actions -->
		<div class="mt-4 border-t border-gray-600 pt-4">
			<DeckActions {onClearDeck} hasCards={hasCards()} />
		</div>
	{/if}
</Box>
