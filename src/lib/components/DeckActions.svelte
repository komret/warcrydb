<!-- Type declarations for Google API -->
<script lang="ts" module>
	interface TokenResponse {
		access_token: string;
		expires_in: number;
		token_type: string;
		scope: string;
		error?: string;
	}

	interface TokenClient {
		requestAccessToken(): void;
	}

	interface GoogleIdentity {
		accounts: {
			oauth2: {
				initTokenClient(config: {
					client_id: string;
					scope: string;
					callback: (response: TokenResponse) => void;
				}): TokenClient;
			};
		};
	}

	declare global {
		interface Window {
			google: GoogleIdentity;
		}
	}
</script>

<script lang="ts">
	import Toast from './Toast.svelte';
	import Button from './Button.svelte';
	import Modal from './Modal.svelte';
	import { browser } from '$app/environment';

	const google = browser ? window.google : null;

	type DeckData = {
		deck: [string, number][];
		sideboard: [string, number][];
		timestamp: string;
	};

	type Props = {
		onClearDeck?: () => void;
		hasCards: boolean;
		deck: Map<string, number>;
		sideboard: Map<string, number>;
		readOnly?: boolean;
		onOpenInDeckBuilder?: () => void;
		onLoadDeck?: (deck: Map<string, number>, sideboard: Map<string, number>) => void;
	};

	let {
		onClearDeck,
		hasCards,
		deck,
		sideboard,
		readOnly = false,
		onOpenInDeckBuilder,
		onLoadDeck
	}: Props = $props();

	let showToast = $state(false);
	let toastMessage = $state('');

	// Check if Google Drive integration is available
	const isGoogleDriveAvailable = $derived(
		!!(import.meta.env.VITE_GOOGLE_CLIENT_ID && import.meta.env.VITE_GOOGLE_API_KEY)
	);

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
				// Fallback: show the URL in a prompt
				prompt('Copy this URL:', window.location.origin + url);
			});
	}

	// Google Drive integration
	let isGoogleApiLoaded = $state(false);
	let isSignedIn = $state(false);
	let tokenClient: TokenClient | null = $state(null);
	let accessToken: string | null = $state(null);

	// Pending action after login
	let pendingAction = $state<(() => void) | null>(null);

	// Deck save/load modals
	let showSaveModal = $state(false);
	let showLoadModal = $state(false);
	let showDeleteModal = $state(false);
	let deckNameInput = $state('');
	let savedDecks = $state<{ id: string; name: string; modifiedTime: string }[]>([]);

	// Initialize Google API
	function initGoogleApi() {
		if (!browser) return; // Only run on client side

		if (!isGoogleDriveAvailable) {
			showToastNotification('Google Drive integration not configured');
			return;
		}

		if (!google) {
			showToastNotification('Google API not loaded');
			return;
		}

		// Initialize the Google Identity Services
		tokenClient = google.accounts.oauth2.initTokenClient({
			client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
			scope: 'https://www.googleapis.com/auth/drive.file',
			callback: (tokenResponse: TokenResponse) => {
				if (tokenResponse.error !== undefined) {
					console.error('Error during token request:', tokenResponse);
					showToastNotification('Failed to authenticate with Google');
					pendingAction = null; // Clear pending action on error
					return;
				}
				accessToken = tokenResponse.access_token;
				isSignedIn = true;
				isGoogleApiLoaded = true;

				// Execute pending action if any
				if (pendingAction) {
					const action = pendingAction;
					pendingAction = null;
					action();
				}
			}
		});

		isGoogleApiLoaded = true;
	}

	// Sign in to Google
	function signInToGoogle() {
		if (!browser) return;

		if (!isGoogleApiLoaded) {
			initGoogleApi();
			return;
		}

		if (!tokenClient) {
			showToastNotification('Google API not initialized');
			return;
		}

		tokenClient.requestAccessToken();
	}

	// Save deck to Google Drive
	async function saveDeckToDrive() {
		if (!browser) return;

		if (!isGoogleDriveAvailable) {
			showToastNotification('Google Drive integration not configured');
			return;
		}

		if (!isSignedIn || !accessToken) {
			pendingAction = () => (showSaveModal = true);
			signInToGoogle();
			return;
		}

		showSaveModal = true;
	}

	// Perform the actual save with the given name
	async function performSaveDeck(name: string) {
		try {
			// Create deck data
			const deckData = {
				deck: Array.from(deck.entries()),
				sideboard: Array.from(sideboard.entries()),
				timestamp: new Date().toISOString()
			};

			const fileContent = JSON.stringify(deckData, null, 2);
			const fileName = `${name}.json`;

			const file = new Blob([fileContent], { type: 'application/json' });
			const metadata = {
				name: fileName,
				mimeType: 'application/json',
				parents: ['appDataFolder'] // Save to app data folder
			};

			const form = new FormData();
			form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
			form.append('file', file);

			const response = await fetch(
				'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${accessToken}`
					},
					body: form
				}
			);

			if (response.ok) {
				showToastNotification('Deck saved to Google Drive');
			} else {
				throw new Error('Failed to save deck');
			}
		} catch (error) {
			console.error('Error saving deck:', error);
			showToastNotification('Failed to save deck to Google Drive');
		}
	}

	// Handle save confirmation from modal
	async function handleSaveConfirm() {
		if (!deckNameInput.trim()) return;
		await performSaveDeck(deckNameInput.trim());
		showSaveModal = false;
		deckNameInput = '';
	}

	// Load deck from Google Drive
	async function loadDeckFromDrive() {
		if (!browser) return;

		if (!isGoogleDriveAvailable) {
			showToastNotification('Google Drive integration not configured');
			return;
		}

		if (!isSignedIn || !accessToken) {
			pendingAction = async () => {
				try {
					// List files in app data folder
					const listResponse = await fetch(
						'https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&fields=files(id,name,modifiedTime)&orderBy=modifiedTime%20desc',
						{
							method: 'GET',
							headers: {
								Authorization: `Bearer ${accessToken}`
							}
						}
					);

					if (!listResponse.ok) {
						throw new Error('Failed to list files');
					}

					const listData = await listResponse.json();
					const files = listData.files;

					if (!files || files.length === 0) {
						showToastNotification('No saved decks found');
						return;
					}

					savedDecks = files;
					showLoadModal = true;
				} catch (error) {
					console.error('Error loading deck list:', error);
					showToastNotification('Failed to load deck list from Google Drive');
				}
			};
			signInToGoogle();
			return;
		}

		try {
			// List files in app data folder
			const listResponse = await fetch(
				'https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&fields=files(id,name,modifiedTime)&orderBy=modifiedTime%20desc',
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${accessToken}`
					}
				}
			);

			if (!listResponse.ok) {
				throw new Error('Failed to list files');
			}

			const listData = await listResponse.json();
			const files = listData.files;

			if (!files || files.length === 0) {
				showToastNotification('No saved decks found');
				return;
			}

			savedDecks = files;
			showLoadModal = true;
		} catch (error) {
			console.error('Error loading deck list:', error);
			showToastNotification('Failed to load deck list from Google Drive');
		}
	}

	// Load a specific deck by file ID
	async function loadSpecificDeck(fileId: string) {
		try {
			const fileResponse = await fetch(
				`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${accessToken}`
					}
				}
			);

			if (!fileResponse.ok) {
				throw new Error('Failed to download file');
			}

			const fileContent = await fileResponse.text();
			const deckData: DeckData = JSON.parse(fileContent);
			const loadedDeck = new Map<string, number>(deckData.deck);
			const loadedSideboard = new Map<string, number>(deckData.sideboard);

			if (onLoadDeck) {
				onLoadDeck(loadedDeck, loadedSideboard);
				showToastNotification('Deck loaded from Google Drive');
			}
			showLoadModal = false;
		} catch (error) {
			console.error('Error loading deck:', error);
			showToastNotification('Failed to load deck from Google Drive');
		}
	}

	// Delete a specific deck by file ID
	async function deleteSpecificDeck(fileId: string, fileName: string) {
		if (!confirm(`Are you sure you want to delete "${fileName.replace('.json', '')}"?`)) {
			return;
		}

		try {
			const deleteResponse = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${accessToken}`
				}
			});

			if (!deleteResponse.ok) {
				throw new Error('Failed to delete file');
			}

			showToastNotification('Deck deleted from Google Drive');
			// Refresh the deck list
			await loadDeckListForDelete();
		} catch (error) {
			console.error('Error deleting deck:', error);
			showToastNotification('Failed to delete deck from Google Drive');
		}
	}

	// Load deck list for delete modal
	async function loadDeckListForDelete() {
		try {
			const listResponse = await fetch(
				'https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&fields=files(id,name,modifiedTime)&orderBy=modifiedTime%20desc',
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${accessToken}`
					}
				}
			);

			if (!listResponse.ok) {
				throw new Error('Failed to list files');
			}

			const listData = await listResponse.json();
			savedDecks = listData.files || [];
		} catch (error) {
			console.error('Error loading deck list for delete:', error);
			showToastNotification('Failed to load deck list from Google Drive');
		}
	}

	// Delete deck from Google Drive
	async function deleteDeckFromDrive() {
		if (!browser) return;

		if (!isGoogleDriveAvailable) {
			showToastNotification('Google Drive integration not configured');
			return;
		}

		if (!isSignedIn || !accessToken) {
			pendingAction = async () => {
				await loadDeckListForDelete();
				showDeleteModal = true;
			};
			signInToGoogle();
			return;
		}

		await loadDeckListForDelete();
		showDeleteModal = true;
	}

	// Initialize Google API on mount
	$effect(() => {
		if (browser) {
			initGoogleApi();
		}
	});
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
		{#if isGoogleDriveAvailable}
			<Button
				variant="secondary"
				onclick={saveDeckToDrive}
				class="flex items-center gap-2 {hasCards ? '' : 'invisible'}"
				title="Save deck to Google Drive"
			>
				<span>Save</span>
			</Button>
			<Button
				variant="secondary"
				onclick={loadDeckFromDrive}
				class="flex items-center gap-2"
				title="Load deck from Google Drive"
			>
				<span>Load</span>
			</Button>
			<Button
				variant="secondary"
				onclick={deleteDeckFromDrive}
				class="flex items-center gap-2"
				title="Delete decks from Google Drive"
			>
				<span>Delete</span>
			</Button>
		{/if}
	{/if}
</div>

<Toast message={toastMessage} show={showToast} />

<!-- Save Deck Modal -->
<Modal
	show={showSaveModal}
	title="Save Deck to Google Drive"
	size="md"
	onClose={() => (showSaveModal = false)}
>
	{#snippet children()}
		<div class="space-y-4">
			<label for="deck-name" class="block text-sm font-medium text-gray-700"> Deck Name </label>
			<input
				id="deck-name"
				type="text"
				bind:value={deckNameInput}
				placeholder="Enter deck name"
				class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				onkeydown={(e) => {
					if (e.key === 'Enter') {
						handleSaveConfirm();
					}
				}}
			/>
		</div>
	{/snippet}
	{#snippet actions()}
		<Button variant="secondary" onclick={() => (showSaveModal = false)}>Cancel</Button>
		<Button variant="primary" onclick={handleSaveConfirm} disabled={!deckNameInput.trim()}>
			Save
		</Button>
	{/snippet}
</Modal>

<!-- Load Deck Modal -->
<Modal
	show={showLoadModal}
	title="Load Deck from Google Drive"
	size="lg"
	onClose={() => (showLoadModal = false)}
>
	{#snippet children()}
		<div class="max-h-96 space-y-2 overflow-y-auto">
			{#each savedDecks as deck}
				<div class="flex items-center justify-between rounded-md border border-gray-200 p-3">
					<div>
						<div class="font-medium">{deck.name.replace('.json', '')}</div>
						<div class="text-sm text-gray-500">
							Modified: {new Date(deck.modifiedTime).toLocaleString()}
						</div>
					</div>
					<Button variant="primary" size="sm" onclick={() => loadSpecificDeck(deck.id)}>
						Load
					</Button>
				</div>
			{/each}
		</div>
	{/snippet}
	{#snippet actions()}
		<Button variant="secondary" onclick={() => (showLoadModal = false)}>Cancel</Button>
	{/snippet}
</Modal>

<!-- Delete Deck Modal -->
<Modal
	show={showDeleteModal}
	title="Delete Decks from Google Drive"
	size="lg"
	onClose={() => (showDeleteModal = false)}
>
	{#snippet children()}
		<div class="max-h-96 space-y-2 overflow-y-auto">
			{#if savedDecks.length === 0}
				<p class="py-8 text-center text-gray-500">No saved decks found</p>
			{:else}
				{#each savedDecks as deck}
					<div class="flex items-center justify-between rounded-md border border-gray-200 p-3">
						<div>
							<div class="font-medium">{deck.name.replace('.json', '')}</div>
							<div class="text-sm text-gray-500">
								Modified: {new Date(deck.modifiedTime).toLocaleString()}
							</div>
						</div>
						<Button
							variant="secondary"
							size="sm"
							onclick={() => deleteSpecificDeck(deck.id, deck.name)}
						>
							Delete
						</Button>
					</div>
				{/each}
			{/if}
		</div>
	{/snippet}
	{#snippet actions()}
		<Button variant="secondary" onclick={() => (showDeleteModal = false)}>Close</Button>
	{/snippet}
</Modal>
