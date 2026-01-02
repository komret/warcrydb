<script lang="ts">
	import type { Card as CardType, Type } from '$lib/data/cards';
	import DeckSection from './DeckSection.svelte';
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
	};

	let {
		deck,
		sideboard,
		cards,
		onRemoveCard,
		onAddCard,
		onMoveToSideboard,
		onMoveFromSideboard
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

	// Deck validation - returns validation message
	const getValidationStatus = $derived(() => {
		let validationMessages = [];

		// Check minimum card counts
		if (armyTotal() < 30 || actionTotal() < 30) {
			validationMessages.push(`not enough cards`);
		}

		// Check sideboard requirements if WA119 is present
		if (hasSideboard()) {
			const wa119Count = deck.get('WA119') || 0;
			const requiredSideboardCards = wa119Count * 3;
			if (sideboardTotal() < requiredSideboardCards) {
				validationMessages.push(
					`sideboard needs ${requiredSideboardCards - sideboardTotal()} more cards`
				);
			}
		}

		// Check faction compatibility
		const allCardsInDeck = Array.from(deck.entries())
			.map(([cardId]) => getCard(cardId))
			.filter((card): card is CardType => card !== undefined);
		const factionsInDeck = new Set(allCardsInDeck.map((card) => card.faction));

		// Invalid if both Hordes of Darkness and Grand Alliance are present
		if (factionsInDeck.has('Hordes of Darkness') && factionsInDeck.has('Grand Alliance')) {
			validationMessages.push('mixed factions');
		}

		if (validationMessages.length > 0) {
			return `Invalid deck: ${validationMessages.join(', ')}.`;
		}

		// Valid deck - determine faction and format
		let faction = 'Neutral';
		if (factionsInDeck.has('Grand Alliance')) {
			faction = 'Grand Alliance';
		} else if (factionsInDeck.has('Hordes of Darkness')) {
			faction = 'Hordes of Darkness';
		}

		// Determine format using shared utility
		const format = getDeckFormatOptimized(allCardsInDeck);

		return `Faction: ${faction}, Format: ${format}`;
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

	{#if deck.size > 0}
		<div class="mt-2 flex items-center justify-between">
			<span class="text-sm font-medium text-gray-300">
				{getValidationStatus()}
			</span>
		</div>
	{/if}
</Box>
