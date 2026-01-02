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

	// Helper functions for consistent color application
	const getFactionBackgroundColor = (faction: string): string => {
		switch (faction) {
			case 'Neutral':
				return 'bg-neutral-faction/30';
			case 'Hordes of Darkness':
				return 'bg-hordes-faction/50';
			case 'Grand Alliance':
				return 'bg-alliance-faction/20';
			default:
				return 'bg-gray-600';
		}
	};

	const getTypeBorderColor = (cardType: string, unique?: boolean): string => {
		if (unique) {
			return 'border-l-unique';
		}

		switch (cardType) {
			case 'Tactic':
				return 'border-l-tactic';
			case 'Command':
				return 'border-l-command';
			case 'Reaction':
				return 'border-l-reaction';
			default:
				return 'border-l-transparent';
		}
	};

	const factionBgColor = $derived(getFactionBackgroundColor(card.faction));
	const borderColor = $derived(getTypeBorderColor(card.type, card.unique));
</script>

<div
	class="flex items-center justify-between rounded {factionBgColor} border-l-4 {borderColor} py-1 pl-1.5"
>
	<div class="min-w-0 flex-1 overflow-hidden">
		<button
			class="max-w-full cursor-pointer truncate text-left text-sm font-medium text-white hover:text-blue-400 focus:text-blue-400 focus:outline-none"
			onclick={() => onOpenModal(cardId)}
			title="Click to view card image"
		>
			{card.name}
		</button>
	</div>
	<div class="ml-2 flex items-center">
		<IconButton
			icon={count === 0 ? '×' : '−'}
			variant={count === 0 ? 'danger' : 'primary'}
			size="lg"
			title={count === 0 ? 'Remove from deck' : 'Remove one copy'}
			onClick={() => onRemoveCard(cardId)}
		/>
		<span class="flex h-6 w-3 items-center justify-center text-lg text-gray-300">{count}</span>
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
