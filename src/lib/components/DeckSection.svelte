<script lang="ts">
	import type { Card as CardType } from '$lib/data/cards';
	import IconButton from './IconButton.svelte';
	import SelectableInput from './SelectableInput.svelte';

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

	{#if cards.length === 0}
		<div class="py-8 text-center text-gray-500">No cards in {title.toLowerCase()} yet</div>
	{:else}
		<div class="space-y-2">
			{#each cards as [cardId, count]}
				{@const card = getCard(cardId)}
				{#if card}
					<div class="flex items-center justify-between rounded bg-gray-600 p-2">
						<div class="min-w-0 flex-1">
							<div class="truncate text-sm font-medium text-white">{card.name}</div>
							<div class="text-xs text-gray-400">{card.type} • {card.faction}</div>
						</div>
						<div class="ml-2 flex items-center">
							<IconButton
								icon={count === 0 ? '×' : '−'}
								variant={count === 0 ? 'danger' : 'primary'}
								size="lg"
								title={count === 0 ? 'Remove from deck' : 'Remove one copy'}
								onClick={() => onRemoveCard(cardId)}
							/>
							<span class="flex h-6 w-7 items-center justify-center text-lg text-gray-300"
								>{count}</span
							>
							<IconButton
								icon="+"
								variant="primary"
								size="lg"
								title="Add one copy"
								disabled={count >= (card.maxCopies || 3)}
								onClick={() => onAddCard(cardId)}
							/>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>
