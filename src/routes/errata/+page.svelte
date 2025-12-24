<script lang="ts">
	import { cards } from '$lib/data/cards';
	import Card from '$lib/components/Card.svelte';
	import Header from '$lib/components/Header.svelte';

	// Filter cards with errata property set (truthy)
	const errataCards = cards.filter((card) => !!card.errata);

	// Filter banned cards
	const bannedCards = cards.filter((card) => card.banned);

	// Modal state
	let selectedCardId = $state<string | null>(null);
</script>

<div class="min-h-screen bg-gray-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-8">
		<Header currentPage="errata" />

		<!-- Errata Cards Section -->
		<section class="mb-8">
			<h2 class="mb-4 text-2xl font-bold">Errata</h2>
			{#if errataCards.length > 0}
				<div class="space-y-4">
					{#each errataCards as card}
						<Card {card} showErrataHighlight={true} onclick={() => (selectedCardId = card.id)} />
					{/each}
				</div>
			{/if}
		</section>

		<!-- Banned Cards Section -->
		<section>
			<h2 class="mb-4 text-2xl font-bold">Banned</h2>
			{#if bannedCards.length > 0}
				<div class="space-y-4">
					{#each bannedCards as card}
						<Card {card} onclick={() => (selectedCardId = card.id)} />
					{/each}
				</div>
			{/if}
		</section>
	</div>
</div>

<!-- Card Image Modal -->
{#if selectedCardId}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
		onclick={() => (selectedCardId = null)}
		onkeydown={(e) => e.key === 'Escape' && (selectedCardId = null)}
		role="button"
		tabindex="0"
	>
		<div
			class="relative max-h-[90vh] max-w-[90vw]"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
			role="button"
			tabindex="0"
		>
			<!-- Close button -->
			<button
				type="button"
				aria-label="Close card image"
				class="absolute -right-4 -top-4 rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
				onclick={() => (selectedCardId = null)}
			>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<!-- Card image -->
			<img
				src="/src/lib/assets/cards/{selectedCardId.toLowerCase()}.jpg"
				alt="Card {selectedCardId}"
				class="max-h-[90vh] w-auto rounded-lg shadow-2xl"
				onerror={(e) => {
					const img = e.currentTarget as HTMLImageElement;
					if (img.src.endsWith('.jpg') && selectedCardId) {
						img.src = `/src/lib/assets/cards/${selectedCardId.toLowerCase()}.jpeg`;
					}
				}}
			/>
		</div>
	</div>
{/if}
