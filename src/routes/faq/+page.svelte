<script lang="ts">
	import { faq, type FAQ } from '$lib/data/faq';
	import { cards } from '$lib/data/cards';
	import Header from '$lib/components/Header.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import SelectableInput from '$lib/components/SelectableInput.svelte';
	import FilterSection from '$lib/components/FilterSection.svelte';
	import FAQItem from '$lib/components/FAQItem.svelte';
	import CardImageModal from '$lib/components/CardImageModal.svelte';
	import { matchesSearch } from '$lib/utils/matchesSearch';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// Default filter values for hasActiveFilters logic
	type DefaultFilters = {
		searchQuery: string;
		selectedCardId: string | null;
		cardNameInput: string;
		selectedCard: string | null;
	};

	const DEFAULT_FILTERS: DefaultFilters = {
		searchQuery: '',
		selectedCardId: null,
		cardNameInput: '',
		selectedCard: null
	};

	let searchQuery = $state(DEFAULT_FILTERS.searchQuery);
	let selectedCardId = $state(DEFAULT_FILTERS.selectedCardId);

	// Card name search state
	let cardNameInput = $state(DEFAULT_FILTERS.cardNameInput);
	let selectedCard = $state(DEFAULT_FILTERS.selectedCard);

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
		cardNameInput = '';
		goto('/faq', { replaceState: true });
	}

	function resetFilters() {
		searchQuery = DEFAULT_FILTERS.searchQuery;
		selectedCard = DEFAULT_FILTERS.selectedCard;
		cardNameInput = DEFAULT_FILTERS.cardNameInput;
		goto('/faq', { replaceState: true });
	}
</script>

<div class="min-h-screen bg-gray-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-8">
		<Header currentPage="faq" />

		<FilterSection
			resultsCount={filteredFAQs.length}
			onReset={resetFilters}
			selectedCard={selectedCard
				? cards.find((c) => c.id === selectedCard) || undefined
				: undefined}
			onCardClick={handleCardClick}
			{hasActiveFilters}
		>
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
		</FilterSection>

		<!-- FAQ List -->
		<div class="space-y-3">
			{#each filteredFAQs as item (item.id)}
				<FAQItem {item} {searchQuery} onCardClick={handleCardClick} />
			{/each}
		</div>
	</div>

	<CardImageModal cardId={selectedCardId} onclose={() => (selectedCardId = null)} />
</div>
