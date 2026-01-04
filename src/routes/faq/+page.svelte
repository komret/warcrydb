<script lang="ts">
	import { faq } from '$lib/data/faq';
	import { cards } from '$lib/data/cards';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import SelectableInput from '$lib/components/SelectableInput.svelte';
	import Box from '$lib/components/atoms/Box.svelte';
	import ResultRow from '$lib/components/ResultRow.svelte';
	import FAQItem from '$lib/components/FAQItem.svelte';
	import Card from '$lib/components/Card.svelte';
	import CardImageModal from '$lib/components/CardImageModal.svelte';
	import { matchesSearch } from '$lib/utils/matchesSearch';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// Default filter values for hasActiveFilters logic
	type DefaultFilters = {
		searchQuery: string;
		cardNameInput: string;
		selectedCard: string | null;
	};

	const DEFAULT_FILTERS: DefaultFilters = {
		searchQuery: '',
		cardNameInput: '',
		selectedCard: null
	};

	let searchQuery = $state(DEFAULT_FILTERS.searchQuery);

	// Card name search state
	let cardNameInput = $state(DEFAULT_FILTERS.cardNameInput);
	let selectedCard = $state(DEFAULT_FILTERS.selectedCard);

	let selectedCardId = $state<string | null>(null);

	onMount(() => {
		const url = new URL(window.location.href);
		const cardParam = url.searchParams.get('card');
		if (cardParam) {
			selectedCard = cardParam;
			const card = cards.find((c) => c.id === cardParam);
			if (card) {
				cardNameInput = card.name;
			}
		}
	});

	// Filter FAQs based on search query and selected card
	const filteredFAQs = $derived.by(() => {
		let filtered = faq;

		// Filter by search query
		if (searchQuery.trim()) {
			filtered = filtered.filter((item) =>
				matchesSearch(searchQuery, () => [item.question, item.answer])
			);
		}

		// Filter by selected card
		if (selectedCard) {
			const card = cards.find((c) => c.id === selectedCard);
			if (card && card.faq) {
				filtered = filtered.filter((item) => card.faq.includes(item.id));
			}
		}

		return filtered;
	});

	const hasActiveFilters = $derived(
		searchQuery !== DEFAULT_FILTERS.searchQuery || selectedCard !== DEFAULT_FILTERS.selectedCard
	);

	function handleCardClick(cardId: string) {
		selectedCardId = cardId;
	}

	function selectCard(card: { id: string; name: string }) {
		selectedCard = card.id;
		goto(`/faq?card=${card.id}`, { replaceState: true });
	}

	function clearCard() {
		selectedCard = null;
		goto('/faq', { replaceState: true });
	}

	function resetFilters() {
		searchQuery = DEFAULT_FILTERS.searchQuery;
		selectedCard = DEFAULT_FILTERS.selectedCard;
		cardNameInput = DEFAULT_FILTERS.cardNameInput;
		goto('/faq', { replaceState: true });
	}
</script>

<Box>
	<!-- Search Bars -->
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		<SearchInput bind:value={searchQuery} label="FAQ text" />
		<div>
			<SelectableInput
				mode="single"
				items={cards}
				bind:value={cardNameInput}
				label="Card name"
				selectedItem={selectedCard ? cards.find((c) => c.id === selectedCard) || null : null}
				onSelect={selectCard}
				onClear={clearCard}
			/>
		</div>
	</div>

	<!-- Results and Reset -->
	<div class="mt-4 border-t border-gray-600 pt-4">
		<ResultRow resultsCount={filteredFAQs.length} onReset={resetFilters} {hasActiveFilters} />
	</div>
</Box>

{#if selectedCard}
	{@const card = cards.find((c) => c.id === selectedCard)}
	{#if card}
		<div class="mb-4">
			<Card {card} onclick={() => handleCardClick(card.id)} />
		</div>
	{/if}
{/if}

<div class="space-y-3">
	{#each filteredFAQs as item (item.id)}
		<FAQItem {item} {searchQuery} onCardClick={handleCardClick} />
	{/each}
</div>

<CardImageModal cardId={selectedCardId} onclose={() => (selectedCardId = null)} />
