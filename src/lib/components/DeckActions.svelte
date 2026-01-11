<script lang="ts">
	import Toast from './atoms/Toast.svelte';
	import Button from './atoms/Button.svelte';
	import DropdownButton from './atoms/DropdownButton.svelte';
	import DeckWarningModal from './DeckWarningModal.svelte';
	import { SvelteURLSearchParams } from 'svelte/reactivity';
	import saveIcon from '../assets/icons/save.svg?raw';
	import loadIcon from '../assets/icons/load.svg?raw';
	import shareIcon from '../assets/icons/share.svg?raw';
	import resetIcon from '../assets/icons/reset.svg?raw';
	import { browser } from '$app/environment';

	type DeckData = {
		deck: [string, number][];
		sideboard: [string, number][];
		timestamp: string;
	};

	type Props = {
		onClearDeck: () => void;
		hasCards: boolean;
		deck: Map<string, number>;
		sideboard: Map<string, number>;
		readOnly?: boolean;
		onOpenInDeckBuilder?: () => void;
		onLoadDeck?: (deck: Map<string, number>, sideboard: Map<string, number>) => void;
		faction?: string;
		format?: string;
	};

	let {
		onClearDeck,
		hasCards,
		deck,
		sideboard,
		readOnly = false,
		onOpenInDeckBuilder,
		onLoadDeck,
		faction,
		format
	}: Props = $props();

	// Toast state
	let toastMessage = $state('');
	let showToast = $state(false);

	// File input reference for import
	let fileInputRef: HTMLInputElement | null = null;

	// Import warning modal state
	let showImportWarning = $state(false);

	// Screen size detection
	let isSmallScreen = $state<boolean | undefined>(undefined);

	$effect(() => {
		if (!browser) return;

		function checkScreenSize() {
			isSmallScreen = window.innerWidth < 768;
		}

		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);

		return () => {
			window.removeEventListener('resize', checkScreenSize);
		};
	});

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
		const params = new SvelteURLSearchParams();

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
				// Fallback: show the URL in a prompt
				prompt('Copy this URL:', window.location.origin + url);
			});
	}

	// Export deck as JSON file
	async function exportDeckToFile() {
		if (!hasCards) return;

		const deckData: DeckData = {
			deck: Array.from(deck.entries()),
			sideboard: Array.from(sideboard.entries()),
			timestamp: new Date().toISOString()
		};

		const dataStr = JSON.stringify(deckData, null, 2);
		const defaultName = `warcry-deck-${new Date().toISOString().split('T')[0]}.json`;

		// Use File System Access API if available (Chrome, Edge, etc.)
		if ('showSaveFilePicker' in window) {
			try {
				const handle = await (window as any).showSaveFilePicker({
					suggestedName: defaultName,
					types: [
						{
							description: 'JSON Files',
							accept: { 'application/json': ['.json'] }
						}
					]
				});

				const writable = await handle.createWritable();
				await writable.write(dataStr);
				await writable.close();

				showToastNotification('Deck exported successfully');
			} catch (err: any) {
				// User cancelled or error occurred
				if (err.name !== 'AbortError') {
					console.error('Error saving file:', err);
					showToastNotification('Failed to export deck');
				}
			}
		} else {
			// Fallback for browsers without File System Access API
			const dataBlob = new Blob([dataStr], { type: 'application/json' });
			const url = URL.createObjectURL(dataBlob);

			const link = document.createElement('a');
			link.href = url;
			link.download = defaultName;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);

			showToastNotification('Deck exported successfully');
		}
	}

	// Import deck from JSON file
	function importDeckFromFile() {
		// Check if there's an existing deck
		const hasExistingDeck = deck.size > 0 || sideboard.size > 0;

		if (hasExistingDeck) {
			// Show warning before opening file picker
			showImportWarning = true;
		} else {
			// No existing deck, open file picker directly
			if (fileInputRef) {
				fileInputRef.click();
			}
		}
	}

	function handleFileImport(event: Event) {
		const target = event.target as HTMLInputElement;
		const file = target.files?.[0];

		if (!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			try {
				const content = e.target?.result as string;
				const deckData: DeckData = JSON.parse(content);

				if (!deckData.deck || !Array.isArray(deckData.deck)) {
					throw new Error('Invalid deck file format');
				}

				const newDeck = new Map(deckData.deck);
				const newSideboard = new Map(deckData.sideboard || []);

				if (onLoadDeck) {
					onLoadDeck(newDeck, newSideboard);
					showToastNotification('Deck imported successfully');
				}
			} catch (error) {
				console.error('Error importing deck:', error);
				showToastNotification('Failed to import deck file');
			}
		};

		reader.readAsText(file);
		// Reset input so the same file can be imported again
		target.value = '';
	}

	function proceedWithImport() {
		showImportWarning = false;
		// Open file picker after user confirms
		if (fileInputRef) {
			fileInputRef.click();
		}
	}

	function cancelImport() {
		showImportWarning = false;
	}
</script>

<div class="mt-2 flex flex-row items-center justify-between gap-2">
	{#if faction && format}
		<div class="flex items-center">
			<span class="text-sm font-medium text-gray-300">
				<span class={faction === 'Mixed factions' ? 'text-red-300' : 'text-gray-300'}
					>{faction}</span
				>
			</span>
			<span class="mx-2 flex items-center text-gray-300">•</span>
			<span class="text-sm font-medium text-gray-300">
				{format}
			</span>
		</div>
	{/if}
	{#if readOnly}
		<Button variant="primary" onclick={onOpenInDeckBuilder}>
			<span>Open in Deck Builder</span>
		</Button>
	{:else if isSmallScreen === true}
		<DropdownButton
			label="Actions"
			variant="primary"
			iconOnly={true}
			items={[
				{
					label: 'Export',
					icon: saveIcon,
					onclick: exportDeckToFile,
					disabled: !hasCards
				},
				{
					label: 'Import',
					icon: loadIcon,
					onclick: importDeckFromFile
				},
				{
					label: 'Share',
					icon: shareIcon,
					onclick: shareDeck,
					disabled: !hasCards
				},
				{
					label: 'Reset',
					icon: resetIcon,
					onclick: onClearDeck,
					disabled: !hasCards,
					variant: 'danger'
				}
			]}
		/>
	{:else if isSmallScreen === false}
		<div class="flex gap-2">
			<Button
				variant="secondary"
				onclick={exportDeckToFile}
				disabled={!hasCards}
				title="Export deck to JSON file"
			>
				{@html saveIcon}
				<span>Export</span>
			</Button>
			<Button variant="secondary" onclick={importDeckFromFile} title="Import deck from JSON file">
				{@html loadIcon}
				<span>Import</span>
			</Button>
			<Button variant="secondary" onclick={shareDeck} disabled={!hasCards} title="Copy deck URL">
				{@html shareIcon}
				<span>Share</span>
			</Button>
			<Button variant="danger" onclick={onClearDeck} disabled={!hasCards} title="Reset deck">
				{@html resetIcon}
				<span>Reset</span>
			</Button>
		</div>
	{/if}
</div>

<!-- Hidden file input for import -->
<input
	type="file"
	accept=".json"
	bind:this={fileInputRef}
	onchange={handleFileImport}
	style="display: none;"
/>

<Toast message={toastMessage} show={showToast} />

<DeckWarningModal
	show={showImportWarning}
	onCancel={cancelImport}
	onProceed={() => proceedWithImport()}
/>
