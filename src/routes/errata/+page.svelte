<script lang="ts">
	import { cards } from '$lib/data/cards';
	import Card from '$lib/components/Card.svelte';
	import Header from '$lib/components/Header.svelte';

	// Filter cards with errata property set (truthy)
	const errataCards = cards.filter((card) => !!card.errata);

	// Filter banned cards
	const bannedCards = cards.filter((card) => card.banned);
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
						<Card {card} showErrataHighlight={true} />
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
						<Card {card} />
					{/each}
				</div>
			{/if}
		</section>
	</div>
</div>
