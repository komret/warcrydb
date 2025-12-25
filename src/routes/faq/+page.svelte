<script lang="ts">
	import { faq, type FAQ } from '$lib/data/faq';
	import Header from '$lib/components/Header.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import FAQItem from '$lib/components/FAQItem.svelte';
	import { matchesSearch } from '$lib/utils/matchesSearch';

	let searchQuery = $state('');

	// Filter FAQs based on search query
	const filteredFAQs = $derived.by(() => {
		if (!searchQuery.trim()) return faq;

		return faq.filter((item) => matchesSearch(searchQuery, () => [item.question, item.answer]));
	});
</script>

<div class="min-h-screen bg-gray-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-8">
		<Header currentPage="faq" />

		<!-- Search Bar -->
		<div class="mb-6">
			<SearchInput bind:value={searchQuery} label="Search" />
			{#if searchQuery}
				<p class="mt-2 text-sm text-gray-400">
					Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''}
				</p>
			{/if}
		</div>

		<!-- FAQ List -->
		<div class="space-y-3">
			{#each filteredFAQs as item (item.id)}
				<FAQItem {item} {searchQuery} />
			{/each}
		</div>

		{#if filteredFAQs.length === 0}
			<div class="text-center text-gray-400">
				<p>No FAQs found matching your search.</p>
			</div>
		{/if}
	</div>
</div>
