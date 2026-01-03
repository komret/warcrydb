<script lang="ts">
	import Toast from './Toast.svelte';
	import Button from './Button.svelte';

	type Props = {
		onClearDeck?: () => void;
		hasCards: boolean;
		deck: Map<string, number>;
		sideboard: Map<string, number>;
		readOnly?: boolean;
		onOpenInDeckBuilder?: () => void;
	};

	let {
		onClearDeck,
		hasCards,
		deck,
		sideboard,
		readOnly = false,
		onOpenInDeckBuilder
	}: Props = $props();

	let showToast = $state(false);
	let toastMessage = $state('');

	function showToastNotification(message: string) {
		toastMessage = message;
		showToast = true;
		setTimeout(() => {
			showToast = false;
		}, 3000); // Hide after 3 seconds
	}

	function shareDeck() {
		// Construct deck string: count + cardId, separated by commas
		const deckParts = Array.from(deck.entries())
			.map(([cardId, count]) => `${count}${cardId}`)
			.sort();

		const sideboardParts = Array.from(sideboard.entries())
			.map(([cardId, count]) => `${count}${cardId}`)
			.sort();

		// Build URL
		let url = '/shared';
		const params = new URLSearchParams();

		if (deckParts.length > 0) {
			params.set('deck', deckParts.join(','));
		}

		if (sideboardParts.length > 0) {
			params.set('sideboard', sideboardParts.join(','));
		}

		const paramString = params.toString();
		if (paramString) {
			url += '?' + paramString;
		}

		// Copy to clipboard
		navigator.clipboard
			.writeText(window.location.origin + url)
			.then(() => {
				showToastNotification('Deck URL copied to clipboard');
			})
			.catch(() => {
				// Fallback: show the URL in a prompt
				prompt('Copy this URL:', window.location.origin + url);
			});
	}
</script>

<div class="flex items-center justify-end gap-2">
	{#if readOnly}
		<Button variant="primary" onclick={onOpenInDeckBuilder}>
			<span>Open in Deck Builder</span>
		</Button>
	{:else}
		<Button
			variant="success"
			onclick={shareDeck}
			class="flex items-center gap-2 {hasCards ? '' : 'invisible'}"
			title="Copy deck URL"
		>
			<span>Share</span>
		</Button>
		<Button
			variant="primary"
			onclick={onClearDeck}
			class="flex items-center gap-2 {hasCards ? '' : 'invisible'}"
			title="Reset deck"
		>
			<span>Reset</span>
		</Button>
	{/if}
</div>

<Toast message={toastMessage} show={showToast} />
