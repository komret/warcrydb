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
	import Toast from './atoms/Toast.svelte';
	import Button from './atoms/Button.svelte';
	import ButtonGroup from './atoms/ButtonGroup.svelte';
	import DropdownButton from './atoms/DropdownButton.svelte';
	import Modal from './atoms/Modal.svelte';
	import { browser } from '$app/environment';
	import { SvelteURLSearchParams } from 'svelte/reactivity';
	import saveIcon from '../assets/icons/save.svg?raw';
	import loadIcon from '../assets/icons/load.svg?raw';
	import deleteIcon from '../assets/icons/delete.svg?raw';
	import googleDriveIcon from '../assets/icons/google-drive.svg?raw';
	import shareIcon from '../assets/icons/share.svg?raw';
	import resetIcon from '../assets/icons/reset.svg?raw';

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

	// Google Drive actions configuration
	const googleDriveActions = [
		{
			key: 'save',
			label: 'Save',
			title: 'Save deck to Google Drive',
			disabled: () => !hasCards,
			onclick: saveDeckToDrive,
			icon: saveIcon
		},
		{
			key: 'load',
			label: 'Load',
			title: 'Load deck from Google Drive',
			disabled: () => false,
			onclick: loadDeckFromDrive,
			icon: loadIcon
		},
		{
			key: 'delete',
			label: 'Delete',
			title: 'Delete decks from Google Drive',
			disabled: () => false,
			onclick: deleteDeckFromDrive,
			icon: deleteIcon
		}
	];

	// Detect small screen
	let isSmallScreen = $state(false);

	// Toast state
	let toastMessage = $state('');
	let showToast = $state(false);

	$effect(() => {
		const checkScreen = () => {
			isSmallScreen = window.innerWidth < 640; // sm breakpoint
		};
		checkScreen();
		window.addEventListener('resize', checkScreen);
		return () => window.removeEventListener('resize', checkScreen);
	});

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
	let saveMode = $state<'new' | 'override'>('new');
	let selectedDeckToOverride = $state<string | null>(null);

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
			pendingAction = async () => {
				await loadDeckListForSave();
				showSaveModal = true;
			};
			signInToGoogle();
			return;
		}

		await loadDeckListForSave();
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
		if (saveMode === 'new') {
			if (!deckNameInput.trim()) return;
			await performSaveDeck(deckNameInput.trim());
		} else if (saveMode === 'override') {
			if (!selectedDeckToOverride) return;
			await performOverrideDeck(selectedDeckToOverride);
		}
		showSaveModal = false;
		resetSaveModal();
	}

	// Perform override of existing deck
	async function performOverrideDeck(fileId: string) {
		try {
			// Create deck data
			const deckData = {
				deck: Array.from(deck.entries()),
				sideboard: Array.from(sideboard.entries()),
				timestamp: new Date().toISOString()
			};

			const fileContent = JSON.stringify(deckData, null, 2);

			const response = await fetch(
				`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`,
				{
					method: 'PATCH',
					headers: {
						Authorization: `Bearer ${accessToken}`,
						'Content-Type': 'application/json'
					},
					body: fileContent
				}
			);

			if (response.ok) {
				showToastNotification('Deck saved to Google Drive');
			} else {
				throw new Error('Failed to save deck');
			}
		} catch (error) {
			console.error('Error overriding deck:', error);
			showToastNotification('Failed to save deck to Google Drive');
		}
	}

	// Reset save modal state
	function resetSaveModal() {
		deckNameInput = '';
		saveMode = 'new';
		selectedDeckToOverride = null;
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
	async function deleteSpecificDeck(fileId: string) {
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

	// Load deck list for save modal
	async function loadDeckListForSave() {
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
			console.error('Error loading deck list for save:', error);
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

<div class="mt-2 flex flex-col justify-between gap-2 lg:flex-row">
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
	<div class="flex items-end justify-end gap-2">
		{#if readOnly}
			<Button variant="primary" onclick={onOpenInDeckBuilder}>
				<span>Open in Deck Builder</span>
			</Button>
		{:else}
			{#if isGoogleDriveAvailable}
				{#if isSmallScreen}
					<DropdownButton items={googleDriveActions} variant="secondary" class="h-9">
						{#snippet children()}
							{@html googleDriveIcon}
							<span>Drive</span>
						{/snippet}
					</DropdownButton>
				{:else}
					<ButtonGroup items={googleDriveActions} class="h-9 flex-shrink-0">
						{#snippet icon()}
							<svg
								class="h-6 w-6"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
								<g id="SVGRepo_iconCarrier">
									<path
										d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
										fill="transparent"
									></path>
									<path
										d="M16.0019 12.4507L12.541 6.34297C12.6559 6.22598 12.7881 6.14924 12.9203 6.09766C11.8998 6.43355 11.4315 7.57961 11.4315 7.57961L5.10895 18.7345C5.01999 19.0843 4.99528 19.4 5.0064 19.6781H11.9072L16.0019 12.4507Z"
										fill="#34A853"
									></path>
									<path
										d="M16.002 12.4507L20.0967 19.6781H26.9975C27.0086 19.4 26.9839 19.0843 26.8949 18.7345L20.5724 7.57961C20.5724 7.57961 20.1029 6.43355 19.0835 6.09766C19.2145 6.14924 19.3479 6.22598 19.4628 6.34297L16.002 12.4507Z"
										fill="#FBBC05"
									></path>
									<path
										d="M16.0019 12.4514L19.4628 6.34371C19.3479 6.22671 19.2144 6.14997 19.0835 6.09839C18.9327 6.04933 18.7709 6.01662 18.5954 6.00781H18.4125H13.5913H13.4084C13.2342 6.01536 13.0711 6.04807 12.9203 6.09839C12.7894 6.14997 12.6559 6.22671 12.541 6.34371L16.0019 12.4514Z"
										fill="#188038"
									></path>
									<path
										d="M11.9082 19.6782L8.48687 25.7168C8.48687 25.7168 8.3732 25.6614 8.21875 25.5469C8.70434 25.9206 9.17633 25.9998 9.17633 25.9998H22.6134C23.3547 25.9998 23.5092 25.7168 23.5092 25.7168C23.5116 25.7155 23.5129 25.7142 23.5153 25.713L20.0965 19.6782H11.9082Z"
										fill="#4285F4"
									></path>
									<path
										d="M11.9086 19.6782H5.00781C5.04241 20.4985 5.39826 20.9778 5.39826 20.9778L5.65773 21.4281C5.67627 21.4546 5.68739 21.4697 5.68739 21.4697L6.25205 22.461L7.51976 24.6676C7.55683 24.7569 7.60008 24.8386 7.6458 24.9166C7.66309 24.9431 7.67915 24.972 7.69769 24.9972C7.70263 25.0047 7.70757 25.0123 7.71252 25.0198C7.86944 25.2412 8.04489 25.4123 8.22034 25.5469C8.37479 25.6627 8.48847 25.7168 8.48847 25.7168L11.9086 19.6782Z"
										fill="#1967D2"
									></path>
									<path
										d="M20.0967 19.6782H26.9974C26.9628 20.4985 26.607 20.9778 26.607 20.9778L26.3475 21.4281C26.329 21.4546 26.3179 21.4697 26.3179 21.4697L25.7532 22.461L24.4855 24.6676C24.4484 24.7569 24.4052 24.8386 24.3595 24.9166C24.3422 24.9431 24.3261 24.972 24.3076 24.9972C24.3026 25.0047 24.2977 25.0123 24.2927 25.0198C24.1358 25.2412 23.9604 25.4123 23.7849 25.5469C23.6305 25.6627 23.5168 25.7168 23.5168 25.7168L20.0967 19.6782Z"
										fill="#EA4335"
									></path>
								</g>
							</svg>
						{/snippet}
					</ButtonGroup>
				{/if}
			{/if}
			<div class="flex gap-2">
				<Button
					variant="secondary"
					onclick={shareDeck}
					disabled={!hasCards}
					class="flex items-center gap-2"
					title="Copy deck URL"
				>
					{@html shareIcon}
					<span>Share</span>
				</Button>
				<Button
					variant="danger"
					onclick={onClearDeck}
					disabled={!hasCards}
					class="flex items-center gap-2"
					title="Reset deck"
				>
					{@html resetIcon}
					<span>Reset</span>
				</Button>
			</div>
		{/if}
	</div>
</div>

<Toast message={toastMessage} show={showToast} />

<!-- Save Deck Modal -->
<Modal
	show={showSaveModal}
	title="Save Deck to Google Drive"
	size="lg"
	onClose={() => {
		showSaveModal = false;
		resetSaveModal();
	}}
>
	{#snippet children()}
		<div class="space-y-6">
			<!-- Mode Selection -->
			<div class="space-y-3">
				<div class="space-y-2">
					<label class="flex items-center">
						<input type="radio" name="saveMode" value="new" bind:group={saveMode} class="mr-2" />
						<span class="text-sm">Create new deck</span>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							name="saveMode"
							value="override"
							bind:group={saveMode}
							class="mr-2"
							disabled={savedDecks.length === 0}
						/>
						<span class="text-sm">Override existing deck</span>
					</label>
				</div>
			</div>

			<!-- New Deck Input -->
			{#if saveMode === 'new'}
				<div class="space-y-2">
					<label for="deck-name" class="block text-sm font-medium text-gray-300">Deck Name</label>
					<input
						id="deck-name"
						type="text"
						bind:value={deckNameInput}
						class="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						onkeydown={(e) => {
							if (e.key === 'Enter') {
								handleSaveConfirm();
							}
						}}
					/>
				</div>
			{/if}

			<!-- Override Existing Deck Selection -->
			{#if saveMode === 'override'}
				<div class="space-y-2">
					{#if savedDecks.length === 0}
						<p class="py-4 text-sm text-gray-500">No saved decks found</p>
					{:else}
						<div class="max-h-48 space-y-2 overflow-y-auto rounded-md border border-gray-700">
							{#each savedDecks as deck (deck.id)}
								<label class="flex cursor-pointer items-center p-2 hover:bg-gray-700">
									<input
										type="radio"
										name="selectedDeck"
										value={deck.id}
										bind:group={selectedDeckToOverride}
										class="mr-3"
									/>
									<div class="flex-1">
										<div class="text-sm font-medium">{deck.name.replace('.json', '')}</div>
										<div class="text-xs text-gray-500">
											Modified: {new Date(deck.modifiedTime).toLocaleString()}
										</div>
									</div>
								</label>
							{/each}
						</div>
					{/if}
				</div>
			{/if}
		</div>
	{/snippet}
	{#snippet actions()}
		<Button
			variant="secondary"
			onclick={() => {
				showSaveModal = false;
				resetSaveModal();
			}}>Cancel</Button
		>
		<Button
			variant="primary"
			onclick={handleSaveConfirm}
			disabled={(saveMode === 'new' && !deckNameInput.trim()) ||
				(saveMode === 'override' && !selectedDeckToOverride)}
		>
			{saveMode === 'new' ? 'Save New Deck' : 'Override Deck'}
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
			{#each savedDecks as deck (deck.id)}
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
				{#each savedDecks as deck (deck.id)}
					<div class="flex items-center justify-between rounded-md border border-gray-200 p-3">
						<div>
							<div class="font-medium">{deck.name.replace('.json', '')}</div>
							<div class="text-sm text-gray-500">
								Modified: {new Date(deck.modifiedTime).toLocaleString()}
							</div>
						</div>
						<Button variant="danger" size="sm" onclick={() => deleteSpecificDeck(deck.id)}>
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
