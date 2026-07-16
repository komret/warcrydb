<script lang="ts">
	import { getCardImageFilename } from '$lib/utils/cardImage';
	import { resolve } from '$app/paths';
	import Toast from './atoms/Toast.svelte';
	import shareIcon from '../assets/icons/share.svg?raw';

	type Props = {
		cardId: string | null;
		onclose: () => void;
	};

	let { cardId, onclose }: Props = $props();

	let modalElement: HTMLDivElement | undefined = $state();
	let showToast = $state(false);
	let toastMessage = $state('');

	$effect(() => {
		if (cardId && modalElement) {
			modalElement.focus();
		}
	});

	function handleImageClick(e: Event) {
		e.stopPropagation();
		onclose();
	}

	async function copyShareLink(e: Event) {
		e.stopPropagation();
		if (!cardId) return;

		const url = `${window.location.origin}${resolve('/card/[id]', { id: cardId })}`;

		try {
			await navigator.clipboard.writeText(url);
			toastMessage = 'Card link copied to clipboard';
		} catch {
			toastMessage = 'Failed to copy card link';
		}
		showToast = true;
		setTimeout(() => (showToast = false), 3000);
	}
</script>

{#if cardId}
	<div
		bind:this={modalElement}
		class="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
		onclick={onclose}
		onkeydown={(e) => e.key === 'Escape' && onclose()}
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
			<!-- Card image -->
			<button
				type="button"
				class="border-none bg-transparent p-0 focus:outline-none"
				onclick={handleImageClick}
				aria-label="Close card image"
			>
				<img
					src="/cards/{getCardImageFilename(cardId)}"
					alt="Card {cardId}"
					class="max-h-[90vh] w-auto rounded-lg shadow-2xl"
				/>
			</button>
		</div>

		<button
			type="button"
			class="fixed right-4 bottom-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white shadow-lg hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
			onclick={copyShareLink}
			title="Copy card link"
			aria-label="Copy card link"
		>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- static SVG asset imported via ?raw, not user input -->
			{@html shareIcon}
		</button>
	</div>

	<Toast message={toastMessage} show={showToast} />
{/if}
