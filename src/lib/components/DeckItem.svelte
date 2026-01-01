<script lang="ts">
	import type { Card as CardType } from '$lib/data/cards';
	import IconButton from './IconButton.svelte';

	type Props = {
		cardId: string;
		count: number;
		card: CardType;
		onRemoveCard: (cardId: string) => void;
		onAddCard: (cardId: string) => void;
		onOpenModal: (cardId: string) => void;
	};

	let { cardId, count, card, onRemoveCard, onAddCard, onOpenModal }: Props = $props();
</script>

<div class="flex items-center justify-between rounded bg-gray-600 p-2">
	<div class="min-w-0 flex-1">
		<button
			class="cursor-pointer truncate text-left text-sm font-medium text-white hover:text-blue-400 focus:text-blue-400 focus:outline-none"
			onclick={() => onOpenModal(cardId)}
			title="Click to view card image"
		>
			{card.name}
		</button>
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
		<span class="flex h-6 w-3 items-center justify-center text-lg text-gray-300"
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