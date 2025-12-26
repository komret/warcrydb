<script lang="ts">
	import { faq, type FAQ } from '$lib/data/faq';
	import { cards } from '$lib/data/cards';
	import Header from '$lib/components/Header.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import AutocompleteInput from '$lib/components/AutocompleteInput.svelte';
	import FilterSection from '$lib/components/FilterSection.svelte';
	import FAQItem from '$lib/components/FAQItem.svelte';
	import CardImageModal from '$lib/components/CardImageModal.svelte';
	import { matchesSearch } from '$lib/utils/matchesSearch';

	let searchQuery = $state('');
	let selectedCardId = $state<string | null>(null);

	// Card name search state
	let cardNameInput = $state('');
	let selectedCard = $state<string | null>(null);

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

	function handleCardClick(cardId: string) {
		selectedCardId = cardId;
	}

	function selectCard(card: { id: string; name: string }) {
		selectedCard = card.id;
	}

	function resetFilters() {
		searchQuery = '';
		selectedCard = null;
		cardNameInput = '';
	}
</script>

<div class="min-h-screen bg-gray-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-8">
		<Header currentPage="faq" />

		<FilterSection
			resultsCount={filteredFAQs.length}
			onReset={resetFilters}
			selectedCardName={selectedCard ? cards.find((c) => c.id === selectedCard)?.name : undefined}
			selectedCardId={selectedCard}
			onCardClick={handleCardClick}
		>
			<!-- Search Bars -->
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<SearchInput bind:value={searchQuery} label="FAQ text" />
				<div>
					<AutocompleteInput
						items={cards}
						bind:value={cardNameInput}
						label="Card name"
						onSelect={selectCard}
						onInput={() => (selectedCard = null)}
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
