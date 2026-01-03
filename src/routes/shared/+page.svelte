<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import type { Card as CardType } from '$lib/data/cards';
	import { cards } from '$lib/data/cards';
	import DeckBuilder from '$lib/components/DeckBuilder.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { onMount } from 'svelte';

	let deck = $state(new Map<string, number>());
	let sideboard = $state(new Map<string, number>());
	let showWarningDialog = $state(false);

	// Parse URL parameters on mount
	onMount(() => {
		const urlParams = new URLSearchParams($page.url.search);

		const deckParam = urlParams.get('deck');
		const sideboardParam = urlParams.get('sideboard');

		if (deckParam) {
			deck = parseDeckString(deckParam);
		}

		if (sideboardParam) {
			sideboard = parseDeckString(sideboardParam);
		}
	});

	function parseDeckString(deckString: string): Map<string, number> {
		const deckMap = new Map<string, number>();

		const parts = deckString.split(',');
		for (const part of parts) {
			const match = part.match(/^(\d+)(.+)$/);
			if (match) {
				const count = parseInt(match[1], 10);
				const cardId = match[2];
				deckMap.set(cardId, count);
			}
		}

		return deckMap;
	}

	function openInDeckBuilder() {
		// Check if there's an existing deck in localStorage
		const savedDeck = localStorage.getItem('deck');
		const savedSideboard = localStorage.getItem('sideboard');

		let hasExistingDeck = false;

		if (savedDeck) {
			try {
				const deckData = JSON.parse(savedDeck);
				const deckMap = new Map(Object.entries(deckData));
				if (deckMap.size > 0) hasExistingDeck = true;
			} catch (e) {
				console.warn('Failed to parse saved deck', e);
			}
		}

		if (savedSideboard) {
			try {
				const sideboardData = JSON.parse(savedSideboard);
				const sideboardMap = new Map(Object.entries(sideboardData));
				if (sideboardMap.size > 0) hasExistingDeck = true;
			} catch (e) {
				console.warn('Failed to parse saved sideboard', e);
			}
		}

		if (hasExistingDeck) {
			showWarningDialog = true;
		} else {
			proceedWithOpening();
		}
	}

	function proceedWithOpening() {
		// Store the shared deck in session storage to load it in the main deck builder
		const deckData = {
			deck: Array.from(deck.entries()),
			sideboard: Array.from(sideboard.entries())
		};
		sessionStorage.setItem('sharedDeck', JSON.stringify(deckData));
		goto('/');
	}

	function cancelOpening() {
		showWarningDialog = false;
	}
</script>

<DeckBuilder {deck} {sideboard} {cards} readOnly={true} onOpenInDeckBuilder={openInDeckBuilder} />

<Modal show={showWarningDialog} title="Warning" onClose={cancelOpening}>
	{#snippet children()}
		<p class="text-gray-300">This action will override any unsaved deck in the Deck Builder.</p>
	{/snippet}

	{#snippet actions()}
		<button
			onclick={cancelOpening}
			class="rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
		>
			Go back
		</button>
		<button
			onclick={proceedWithOpening}
			class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		>
			Proceed
		</button>
	{/snippet}
</Modal>
