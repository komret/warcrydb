<script lang="ts">
	import { cards } from '$lib/data/cards';
	import Card from '$lib/components/Card.svelte';
	import CardImageModal from '$lib/components/CardImageModal.svelte';

	// Filter cards with errata property set (truthy)
	const errataCards = cards.filter((card) => !!card.errata);

	// Filter banned cards
	const bannedCards = cards.filter((card) => card.banned);

	// Modal state
	let selectedCardId = $state<string | null>(null);
</script>

<!-- Errata Cards Section -->
<section class="mb-8">
	<h2 class="mb-4 text-2xl font-bold">Errata</h2>
	{#if errataCards.length > 0}
		<div class="space-y-4">
			{#each errataCards as card}
				<Card
					{card}
					showFaqIcon
					showErrataHighlight={true}
					onclick={() => (selectedCardId = card.id)}
				/>
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

<CardImageModal cardId={selectedCardId} onclose={() => (selectedCardId = null)} />
