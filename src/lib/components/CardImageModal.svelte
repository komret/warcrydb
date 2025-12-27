<script lang="ts">
	type Props = {
		cardId: string | null;
		onclose: () => void;
	};

	let { cardId, onclose }: Props = $props();

	let modalElement: HTMLDivElement | undefined = $state();

	$effect(() => {
		if (cardId && modalElement) {
			modalElement.focus();
		}
	});

	// Mapping of missing WA card images to their alternative filenames from other sets
	// Remove items from this list as images are added
	const waCardFallbacks: Record<string, string> = {
		WA124: 'bd36',
		WA161: 'cd20',
		WA163: 'vt26',
		WA169: 'lc56',
		WA194: 'wm61',
		WA201: 'dh36',
		WA260: 'SM81',
		WA263: 'wm81',
		WA295: 'hw92',
		WA374: 'bd119',
		WA376: 'hw110'
	};

	// Get the image filename for the card
	const getImageFilename = $derived(() => {
		if (!cardId) return '';
		const fallback = waCardFallbacks[cardId];
		return fallback ? `${fallback}.jpg` : `${cardId.toLowerCase()}.jpg`;
	});
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
			<!-- Close button -->
			<button
				type="button"
				class="absolute -top-4 -right-4 rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				onclick={onclose}
				aria-label="Close card image"
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
				src="/cards/{getImageFilename()}"
				alt="Card {cardId}"
				class="max-h-[90vh] w-auto rounded-lg shadow-2xl"
			/>
		</div>
	</div>
{/if}
