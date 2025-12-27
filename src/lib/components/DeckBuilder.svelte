<script lang="ts">
	import type { Card as CardType } from '$lib/data/cards';
	import Card from './Card.svelte';

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

	// Calculate deck totals
	const armyCards = $derived(() => {
		const armyCardIds = Array.from(deck.entries())
			.filter(([cardId]) => {
				const card = getCard(cardId);
				return card && ['Unit', 'Attachment'].includes(card.type);
			})
			.sort(([a], [b]) => {
				const cardA = getCard(a);
				const cardB = getCard(b);
				if (!cardA || !cardB) return 0;
				return cardA.name.localeCompare(cardB.name);
			});
		return armyCardIds;
	});

	const actionCards = $derived(() => {
		const actionCardIds = Array.from(deck.entries())
			.filter(([cardId]) => {
				const card = getCard(cardId);
				return card && !['Unit', 'Attachment'].includes(card.type);
			})
			.sort(([a], [b]) => {
				const cardA = getCard(a);
				const cardB = getCard(b);
				if (!cardA || !cardB) return 0;
				return cardA.name.localeCompare(cardB.name);
			});
		return actionCardIds;
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

<div class="mb-6 rounded-lg bg-gray-800 p-4 shadow-xl">
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
		<!-- Army Deck -->
		<div class="rounded-lg bg-gray-700 p-4">
			<div class="mb-3 flex items-center justify-between">
				<h3 class="text-lg font-semibold text-white">Army Deck</h3>
				<span class="text-sm text-gray-400">{armyTotal()}/30 cards</span>
			</div>

			{#if armyCards().length === 0}
				<div class="py-8 text-center text-gray-500">No cards in Army deck yet</div>
			{:else}
				<div class="max-h-96 space-y-2 overflow-y-auto">
					{#each armyCards() as [cardId, count]}
						{@const card = getCard(cardId)}
						{#if card}
							<div class="flex items-center justify-between rounded bg-gray-600 p-2">
								<div class="min-w-0 flex-1">
									<div class="truncate text-sm font-medium text-white">{card.name}</div>
									<div class="text-xs text-gray-400">{card.type} • {card.faction}</div>
								</div>
								<div class="ml-2 flex items-center">
									<button
										onclick={() => onRemoveCard(cardId)}
										class="flex h-6 w-6 items-center justify-center text-lg {count <= 0
											? 'cursor-pointer text-red-400 hover:text-red-300'
											: 'cursor-pointer text-blue-300 hover:text-blue-400'} focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
										disabled={false}
										aria-label={count === 0 ? 'Remove card from deck' : 'Remove one copy'}
									>
										{count === 0 ? '×' : '−'}
									</button>
									<span class="flex h-6 w-7 items-center justify-center text-lg text-gray-300"
										>{count}</span
									>
									<button
										onclick={() => onAddCard(cardId)}
										class="flex h-6 w-6 items-center justify-center text-lg {count >=
										(card.maxCopies || 3)
											? 'cursor-default text-gray-400'
											: 'cursor-pointer text-blue-300 hover:text-blue-400'} focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
										disabled={count >= (card.maxCopies || 3)}
										aria-label="Add one copy"
									>
										+
									</button>
								</div>
							</div>
						{/if}
					{/each}
				</div>
			{/if}
		</div>

		<!-- Action Deck -->
		<div class="rounded-lg bg-gray-700 p-4">
			<div class="mb-3 flex items-center justify-between">
				<h3 class="text-lg font-semibold text-white">Action Deck</h3>
				<span class="text-sm text-gray-400">{actionTotal()}/30 cards</span>
			</div>

			{#if actionCards().length === 0}
				<div class="py-8 text-center text-gray-500">No cards in Action deck yet</div>
			{:else}
				<div class="max-h-96 space-y-2 overflow-y-auto">
					{#each actionCards() as [cardId, count]}
						{@const card = getCard(cardId)}
						{#if card}
							<div class="flex items-center justify-between rounded bg-gray-600 p-2">
								<div class="min-w-0 flex-1">
									<div class="truncate text-sm font-medium text-white">{card.name}</div>
									<div class="text-xs text-gray-400">{card.type} • {card.faction}</div>
								</div>
								<div class="ml-2 flex items-center">
									<button
										onclick={() => onRemoveCard(cardId)}
										class="flex h-6 w-6 items-center justify-center text-lg {count <= 0
											? 'cursor-default text-gray-400'
											: 'cursor-pointer text-blue-300 hover:text-blue-400'} focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
										disabled={count <= 0}
										aria-label={count === 1 ? 'Remove card from deck' : 'Remove one copy'}
									>
										{count === 1 ? '×' : '−'}
									</button>
									<span class="flex h-6 w-7 items-center justify-center text-lg text-gray-300"
										>{count}</span
									>
									<button
										onclick={() => onAddCard(cardId)}
										class="flex h-6 w-6 items-center justify-center text-lg {count >=
										(card.maxCopies || 3)
											? 'cursor-default text-gray-400'
											: 'cursor-pointer text-blue-300 hover:text-blue-400'} focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
										disabled={count >= (card.maxCopies || 3)}
										aria-label="Add one copy"
									>
										+
									</button>
								</div>
							</div>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
