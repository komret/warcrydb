<script lang="ts">
	import { faq, type FAQ } from '$lib/data/faq';
	import { cards } from '$lib/data/cards';
	import Header from '$lib/components/Header.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import AutocompleteInput from '$lib/components/AutocompleteInput.svelte';
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

		<!-- Filters Section -->
		<div class="mb-4 rounded-lg bg-gray-800 p-4 shadow-xl">
			<!-- Search Bars -->
			<div class="space-y-4">
				<SearchInput bind:value={searchQuery} label="Search FAQs" />
				<AutocompleteInput
					items={cards}
					bind:value={cardNameInput}
					label="Filter by Card Name"
					placeholder="Enter card name..."
					onSelect={selectCard}
					onInput={() => (selectedCard = null)}
				/>
				{#if selectedCard}
					<p class="mt-2 text-sm text-gray-400">
						Showing FAQ entries related to "{cards.find((c) => c.id === selectedCard)?.name}"
					</p>
				{/if}
			</div>
		</div>

		<!-- Results Count -->
		<div class="mb-4 flex items-center justify-between">
			<div class="text-sm text-gray-400">
				{filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''}
			</div>
			<button
				onclick={resetFilters}
				class="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
			>
				<span>Reset filters</span>
			</button>
		</div>

		<!-- FAQ List -->
		<div class="space-y-3">
			{#each filteredFAQs as item (item.id)}
				<FAQItem {item} {searchQuery} onCardClick={handleCardClick} />
			{/each}
		</div>

		{#if filteredFAQs.length === 0}
			<div class="text-center text-gray-400">
				<p>No FAQs found matching your search.</p>
			</div>
		{/if}
	</div>

	<CardImageModal cardId={selectedCardId} onclose={() => (selectedCardId = null)} />
</div>
