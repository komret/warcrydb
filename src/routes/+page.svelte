<script lang="ts">
	import {
		cards,
		factions,
		cardTypes,
		rarities,
		sets,
		setNames,
		keywords,
		dieValues,
		costValues,
		tacticPointsValues,
		strengthValues,
		leadershipValues,
		type Keyword
	} from '$lib/data/cards';
	import { cardMatchesFormat } from '$lib/utils/cardMatchesFormat';
	import Card from '$lib/components/Card.svelte';
	import CardImageModal from '$lib/components/CardImageModal.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import SelectableInput from '$lib/components/SelectableInput.svelte';
	import Box from '$lib/components/atoms/Box.svelte';
	import ResultRow from '$lib/components/ResultRow.svelte';
	import DeckBuilder from '$lib/components/DeckBuilder.svelte';
	import { matchesSearch } from '$lib/utils/matchesSearch';
	import { onMount } from 'svelte';

	// Type definitions
	type NumericOperator = 'exact' | 'higher' | 'lower';

	// Format definitions
	const formats = [
		{
			value: 'any',
			label: 'Open',
			description: 'all cards, including banned, are eligible.'
		},
		{
			value: 'warcry',
			label: 'WarCry',
			description: 'only cards from the initial block are eligible (BD or older).'
		},
		{
			value: 'attrition',
			label: 'Attrition',
			description:
				'only cards from the Attrition block are eligible (cards marked by the axe symbol - BR or newer).'
		},
		{
			value: 'oldschool',
			label: 'Old School',
			description: 'only cards from the first three sets and promos from that era are eligible.'
		}
	];

	// Default filter values for hasActiveFilters logic
	type DefaultFilters = {
		searchQuery: string;
		selectedFactions: Set<string>;
		selectedTypes: Set<string>;
		selectedRarities: Set<string>;
		selectedSet: (typeof sets)[number] | 'any';
		selectedFormat: (typeof formats)[number]['value'] | 'any';
		selectedKeywords: Keyword[];
		keywordOperators: ('|' | '&')[];
		keywordInput: string;
		uniqueFilter: 'any' | 'yes' | 'no';
		costOperator: NumericOperator;
		costValue: string;
		strengthOperator: NumericOperator;
		strengthValue: string;
		tacticPointsOperator: NumericOperator;
		tacticPointsValue: string;
		leadershipOperator: NumericOperator;
		leadershipValue: string;
		dieOperator: NumericOperator;
		dieValue: string;
	};

	const DEFAULT_FILTERS: DefaultFilters = {
		searchQuery: '',
		selectedFactions: new Set<string>(),
		selectedTypes: new Set<string>(),
		selectedRarities: new Set<string>(),
		selectedSet: 'any',
		selectedFormat: 'any',
		selectedKeywords: [],
		keywordOperators: [],
		keywordInput: '',
		uniqueFilter: 'any',
		costOperator: 'exact',
		costValue: '',
		strengthOperator: 'exact',
		strengthValue: '',
		tacticPointsOperator: 'exact',
		tacticPointsValue: '',
		leadershipOperator: 'exact',
		leadershipValue: '',
		dieOperator: 'exact',
		dieValue: ''
	};

	let searchQuery = $state(DEFAULT_FILTERS.searchQuery);

	let selectedFactions = $state(DEFAULT_FILTERS.selectedFactions);
	let selectedTypes = $state(DEFAULT_FILTERS.selectedTypes);
	let selectedRarities = $state(DEFAULT_FILTERS.selectedRarities);
	let selectedSet = $state(DEFAULT_FILTERS.selectedSet);
	let selectedFormat = $state(DEFAULT_FILTERS.selectedFormat);
	let uniqueFilter = $state(DEFAULT_FILTERS.uniqueFilter);

	// Check if desktop (768px or wider) to set default open/closed state
	const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
	let showFactionFilter = $state(isDesktop);
	let showCardTypeFilter = $state(isDesktop);
	let showRarityFilter = $state(isDesktop);

	// Format tooltip state
	let showFormatTooltip = $state(false);

	// Keyword filter state
	let keywordInput = $state(DEFAULT_FILTERS.keywordInput);
	let selectedKeywords = $state(DEFAULT_FILTERS.selectedKeywords);
	let keywordOperators = $state(DEFAULT_FILTERS.keywordOperators); // operators between keywords

	// Numerical filter states
	let costOperator = $state(DEFAULT_FILTERS.costOperator);
	let costValue = $state(DEFAULT_FILTERS.costValue);
	let strengthOperator = $state(DEFAULT_FILTERS.strengthOperator);
	let strengthValue = $state(DEFAULT_FILTERS.strengthValue);
	let tacticPointsOperator = $state(DEFAULT_FILTERS.tacticPointsOperator);
	let tacticPointsValue = $state(DEFAULT_FILTERS.tacticPointsValue);
	let leadershipOperator = $state(DEFAULT_FILTERS.leadershipOperator);
	let leadershipValue = $state(DEFAULT_FILTERS.leadershipValue);
	let dieOperator = $state(DEFAULT_FILTERS.dieOperator);
	let dieValue = $state(DEFAULT_FILTERS.dieValue);

	// Modal state
	let selectedCardId = $state<string | null>(null);

	// Deck state
	let deck = $state(new Map<string, number>());
	let sideboard = $state(new Map<string, number>());
	let isDeckLoaded = $state(false);

	// Filtered results (updated after debounce)
	let filteredCards = $state<typeof cards>([]);
	let filterDebounceTimer: ReturnType<typeof setTimeout> | null = null;
	let isFiltering = $state(true);

	onMount(() => {
		const saved = localStorage.getItem('homeFilters');
		if (saved) {
			try {
				const f = JSON.parse(saved);
				searchQuery = f.searchQuery ?? DEFAULT_FILTERS.searchQuery;
				selectedFactions = new Set(f.selectedFactions ?? []);
				selectedTypes = new Set(f.selectedTypes ?? []);
				selectedRarities = new Set(f.selectedRarities ?? []);
				selectedSet = f.selectedSet ?? DEFAULT_FILTERS.selectedSet;
				selectedFormat = f.selectedFormat ?? DEFAULT_FILTERS.selectedFormat;
				selectedKeywords = f.selectedKeywords ?? DEFAULT_FILTERS.selectedKeywords;
				keywordOperators = f.keywordOperators ?? DEFAULT_FILTERS.keywordOperators;
				keywordInput = f.keywordInput ?? DEFAULT_FILTERS.keywordInput;
				uniqueFilter = f.uniqueFilter ?? DEFAULT_FILTERS.uniqueFilter;
				costOperator = f.costOperator ?? DEFAULT_FILTERS.costOperator;
				costValue = f.costValue ?? DEFAULT_FILTERS.costValue;
				strengthOperator = f.strengthOperator ?? DEFAULT_FILTERS.strengthOperator;
				strengthValue = f.strengthValue ?? DEFAULT_FILTERS.strengthValue;
				tacticPointsOperator = f.tacticPointsOperator ?? DEFAULT_FILTERS.tacticPointsOperator;
				tacticPointsValue = f.tacticPointsValue ?? DEFAULT_FILTERS.tacticPointsValue;
				leadershipOperator = f.leadershipOperator ?? DEFAULT_FILTERS.leadershipOperator;
				leadershipValue = f.leadershipValue ?? DEFAULT_FILTERS.leadershipValue;
				dieOperator = f.dieOperator ?? DEFAULT_FILTERS.dieOperator;
				dieValue = f.dieValue ?? DEFAULT_FILTERS.dieValue;
			} catch (e) {
				console.warn('Failed to load saved filters', e);
			}
		}

		// Check for shared deck first
		const sharedDeckData = sessionStorage.getItem('sharedDeck');
		if (sharedDeckData) {
			try {
				const { deck: sharedDeck, sideboard: sharedSideboard } = JSON.parse(sharedDeckData);
				deck = new Map(sharedDeck);
				sideboard = new Map(sharedSideboard);
				sessionStorage.removeItem('sharedDeck'); // Clear it after loading
			} catch (e) {
				console.warn('Failed to load shared deck', e);
			}
		} else {
			// Load regular saved deck
			const savedDeck = localStorage.getItem('deck');
			if (savedDeck) {
				try {
					const deckData = JSON.parse(savedDeck);
					deck = new Map(Object.entries(deckData));
				} catch (e) {
					console.warn('Failed to load saved deck', e);
				}
			}

			const savedSideboard = localStorage.getItem('sideboard');
			if (savedSideboard) {
				try {
					const sideboardData = JSON.parse(savedSideboard);
					sideboard = new Map(Object.entries(sideboardData));
				} catch (e) {
					console.warn('Failed to load saved sideboard', e);
				}
			}
		}

		isDeckLoaded = true;
	});

	$effect(() => {
		const filters = {
			searchQuery,
			selectedFactions: Array.from(selectedFactions),
			selectedTypes: Array.from(selectedTypes),
			selectedRarities: Array.from(selectedRarities),
			selectedSet,
			selectedFormat,
			selectedKeywords,
			keywordOperators,
			keywordInput,
			uniqueFilter,
			costOperator,
			costValue,
			strengthOperator,
			strengthValue,
			tacticPointsOperator,
			tacticPointsValue,
			leadershipOperator,
			leadershipValue,
			dieOperator,
			dieValue
		};
		localStorage.setItem('homeFilters', JSON.stringify(filters));
	});

	// Save deck to localStorage
	$effect(() => {
		const deckData = Object.fromEntries(deck);
		localStorage.setItem('deck', JSON.stringify(deckData));
	});

	// Save sideboard to localStorage
	$effect(() => {
		const sideboardData = Object.fromEntries(sideboard);
		localStorage.setItem('sideboard', JSON.stringify(sideboardData));
	});

	// Watch for filter changes and trigger debounced filter update
	$effect(() => {
		// If no filters are active, show all cards immediately
		if (!hasActiveFilters) {
			filteredCards = cards;
			isFiltering = false;
			return;
		}

		// Read all filter values to track changes
		searchQuery; // Watch for search changes
		selectedFactions.size;
		selectedTypes.size;
		selectedRarities.size;
		selectedSet;
		selectedFormat;
		uniqueFilter;
		selectedKeywords.length;
		keywordOperators.length;
		costOperator;
		costValue;
		strengthOperator;
		strengthValue;
		tacticPointsOperator;
		tacticPointsValue;
		leadershipOperator;
		leadershipValue;
		dieOperator;
		dieValue;

		// Set filtering state and reset timer
		isFiltering = true;
		if (filterDebounceTimer) {
			clearTimeout(filterDebounceTimer);
		}

		const delay = 250;
		filterDebounceTimer = setTimeout(() => {
			filteredCards = computeFilteredCards();
			isFiltering = false;
		}, delay);

		return () => {
			if (filterDebounceTimer) {
				clearTimeout(filterDebounceTimer);
			}
			isFiltering = false;
		};
	});

	const hasActiveFilters = $derived(
		searchQuery !== DEFAULT_FILTERS.searchQuery ||
			selectedFactions.size !== DEFAULT_FILTERS.selectedFactions.size ||
			selectedTypes.size !== DEFAULT_FILTERS.selectedTypes.size ||
			selectedRarities.size !== DEFAULT_FILTERS.selectedRarities.size ||
			selectedSet !== DEFAULT_FILTERS.selectedSet ||
			selectedFormat !== DEFAULT_FILTERS.selectedFormat ||
			selectedKeywords.length !== DEFAULT_FILTERS.selectedKeywords.length ||
			keywordOperators.length !== DEFAULT_FILTERS.keywordOperators.length ||
			keywordInput !== DEFAULT_FILTERS.keywordInput ||
			uniqueFilter !== DEFAULT_FILTERS.uniqueFilter ||
			costOperator !== DEFAULT_FILTERS.costOperator ||
			costValue !== DEFAULT_FILTERS.costValue ||
			strengthOperator !== DEFAULT_FILTERS.strengthOperator ||
			strengthValue !== DEFAULT_FILTERS.strengthValue ||
			tacticPointsOperator !== DEFAULT_FILTERS.tacticPointsOperator ||
			tacticPointsValue !== DEFAULT_FILTERS.tacticPointsValue ||
			leadershipOperator !== DEFAULT_FILTERS.leadershipOperator ||
			leadershipValue !== DEFAULT_FILTERS.leadershipValue ||
			dieOperator !== DEFAULT_FILTERS.dieOperator ||
			dieValue !== DEFAULT_FILTERS.dieValue
	);

	// Helper function to evaluate search with operator precedence (AND before OR)
	function evaluateSearchWithPrecedence(
		items: string[],
		operators: ('|' | '&')[],
		checkMatch: (item: string) => boolean
	): boolean {
		if (items.length === 0) return true;
		if (items.length === 1) return checkMatch(items[0]);

		// Group items by OR operator (union has lower precedence)
		// Split into groups where each group contains items connected by AND
		const orGroups: string[][] = [];
		let currentGroup: string[] = [items[0]];

		for (let i = 0; i < operators.length; i++) {
			if (operators[i] === '&') {
				// AND - add to current group
				currentGroup.push(items[i + 1]);
			} else {
				// OR - close current group and start new one
				orGroups.push(currentGroup);
				currentGroup = [items[i + 1]];
			}
		}
		orGroups.push(currentGroup);

		// At least one OR group must have all its AND items match
		return orGroups.some((group) => group.every((item) => checkMatch(item)));
	}

	// Helper functions
	function toggleSelection(set: Set<string>, value: string) {
		if (set.has(value)) {
			set.delete(value);
		} else {
			set.add(value);
		}
		return new Set(set);
	}

	function normalizeValue(value: number | 'X' | undefined): number {
		if (value === 'X' || value === undefined) {
			return 0;
		}
		return value;
	}

	function compareNumbers(
		cardValue: number | 'X' | undefined,
		operator: string,
		filterValue: string | number
	): boolean {
		// Check for empty string specifically, not just falsy values (0 is valid!)
		if (filterValue === '' || filterValue === null || filterValue === undefined) return true;

		// Convert to string for consistent handling
		const filterStr = String(filterValue);

		// Handle exact match for 'X'
		if (operator === 'exact' && filterStr === 'X') {
			return cardValue === 'X';
		}

		// For comparison operators, treat 'X' as 0
		const filter = filterStr === 'X' ? 0 : parseInt(filterStr);
		if (isNaN(filter)) return true;

		// For exact comparisons, check actual value (don't normalize undefined/X)
		if (operator === 'exact') {
			// Only match if the card has an actual numeric value that equals the filter
			return typeof cardValue === 'number' && cardValue === filter;
		}

		// For higher/lower comparisons, normalize 'X' and undefined to 0
		const normalized = normalizeValue(cardValue);

		switch (operator) {
			case 'higher':
				return normalized > filter;
			case 'lower':
				return normalized < filter;
			default:
				return true;
		}
	}

	function addKeyword(keyword: Keyword) {
		if (!selectedKeywords.includes(keyword)) {
			selectedKeywords = [...selectedKeywords, keyword];
			// Add a new '|' operator for the new keyword (if not first)
			if (selectedKeywords.length > 1) {
				keywordOperators = [...keywordOperators, '&'];
			}
		}
		keywordInput = '';
	}

	function removeKeyword(keyword: Keyword) {
		const index = selectedKeywords.indexOf(keyword);
		if (index !== -1) {
			selectedKeywords = selectedKeywords.filter((k) => k !== keyword);
			// Remove the corresponding operator
			if (index === 0 && keywordOperators.length > 0) {
				// Removing first keyword, remove first operator
				keywordOperators = keywordOperators.slice(1);
			} else if (index > 0) {
				// Remove the operator before this keyword
				keywordOperators = keywordOperators.filter((_, i) => i !== index - 1);
			}
		}
	}

	function toggleOperator(index: number) {
		keywordOperators = keywordOperators.map((op, i) =>
			i === index ? (op === '&' ? '|' : '&') : op
		);
	}

	function resetFilters() {
		searchQuery = DEFAULT_FILTERS.searchQuery;
		selectedFactions = new Set(DEFAULT_FILTERS.selectedFactions);
		selectedTypes = new Set(DEFAULT_FILTERS.selectedTypes);
		selectedRarities = new Set(DEFAULT_FILTERS.selectedRarities);
		selectedSet = DEFAULT_FILTERS.selectedSet;
		selectedFormat = DEFAULT_FILTERS.selectedFormat;
		selectedKeywords = [...DEFAULT_FILTERS.selectedKeywords];
		keywordOperators = [...DEFAULT_FILTERS.keywordOperators];
		keywordInput = DEFAULT_FILTERS.keywordInput;
		uniqueFilter = DEFAULT_FILTERS.uniqueFilter;
		costOperator = DEFAULT_FILTERS.costOperator;
		costValue = DEFAULT_FILTERS.costValue;
		strengthOperator = DEFAULT_FILTERS.strengthOperator;
		strengthValue = DEFAULT_FILTERS.strengthValue;
		tacticPointsOperator = DEFAULT_FILTERS.tacticPointsOperator;
		tacticPointsValue = DEFAULT_FILTERS.tacticPointsValue;
		leadershipOperator = DEFAULT_FILTERS.leadershipOperator;
		leadershipValue = DEFAULT_FILTERS.leadershipValue;
		dieOperator = DEFAULT_FILTERS.dieOperator;
		dieValue = DEFAULT_FILTERS.dieValue;
	}

	// Deck functions
	function addToDeck(cardId: string, deckMap: Map<string, number> = deck) {
		const card = cards.find((c) => c.id === cardId);
		if (!card) return;

		const rawCurrentDeckCount = deckMap.get(cardId);
		const currentDeckCount = rawCurrentDeckCount ?? 0;
		const otherDeckCount = (deckMap === deck ? sideboard.get(cardId) : deck.get(cardId)) ?? 0;
		const totalCount = currentDeckCount + otherDeckCount;
		const maxCopies = card.maxCopies;

		if (totalCount < maxCopies) {
			// If the card is not in the deck yet, set count to 0, else increment
			deckMap.set(cardId, rawCurrentDeckCount === undefined ? 0 : currentDeckCount + 1);
			if (deckMap === deck) {
				deck = new Map(deck); // Trigger reactivity
			} else if (deckMap === sideboard) {
				sideboard = new Map(sideboard); // Trigger reactivity
			}
		}
	}

	function removeFromDeck(cardId: string, deckMap: Map<string, number> = deck) {
		const currentCount = deckMap.get(cardId) || 0;
		if (currentCount > 0) {
			deckMap.set(cardId, currentCount - 1);
		} else if (currentCount === 0) {
			deckMap.delete(cardId);
		}
		if (deckMap === deck) {
			deck = new Map(deck); // Trigger reactivity
		} else if (deckMap === sideboard) {
			sideboard = new Map(sideboard); // Trigger reactivity
		}
	}

	// Sideboard functions
	function moveToSideboard(cardId: string) {
		const card = cards.find((c) => c.id === cardId);
		if (!card) return;

		const deckCount = deck.get(cardId) || 0;

		// Can only move if we have at least 1 copy in deck
		if (deckCount > 0) {
			const sideboardCount = sideboard.get(cardId) || 0;

			// Remove from deck
			deck.set(cardId, deckCount - 1);
			if (deckCount === 1) {
				deck.delete(cardId);
			}

			// Add to sideboard
			sideboard.set(cardId, sideboardCount + 1);
			deck = new Map(deck); // Trigger reactivity
			sideboard = new Map(sideboard); // Trigger reactivity
		}
	}

	function moveFromSideboard(cardId: string) {
		const card = cards.find((c) => c.id === cardId);
		if (!card) return;

		const sideboardCount = sideboard.get(cardId) || 0;

		// Can only move if we have at least 1 copy in sideboard
		if (sideboardCount > 0) {
			const deckCount = deck.get(cardId) || 0;

			// Remove from sideboard
			sideboard.set(cardId, sideboardCount - 1);
			if (sideboardCount === 1) {
				sideboard.delete(cardId);
			}

			// Add to deck
			deck.set(cardId, deckCount + 1);
			deck = new Map(deck); // Trigger reactivity
			sideboard = new Map(sideboard); // Trigger reactivity
		}
	}

	function clearDeck() {
		deck = new Map();
		sideboard = new Map();
	}

	function loadDeck(loadedDeck: Map<string, number>, loadedSideboard: Map<string, number>) {
		deck = loadedDeck;
		sideboard = loadedSideboard;
	}

	// Compute filtered cards based on current filter state
	function computeFilteredCards() {
		return cards.filter((card) => {
			// Search filter
			if (searchQuery && !matchesSearch(searchQuery, () => [card.name, card.text])) {
				return false;
			}

			// Multi-select faction filter
			if (selectedFactions.size > 0 && !selectedFactions.has(card.faction)) {
				return false;
			}

			// Multi-select card type filter
			if (selectedTypes.size > 0 && !selectedTypes.has(card.type)) {
				return false;
			}

			// Multi-select rarity filter
			if (selectedRarities.size > 0 && (!card.rarity || !selectedRarities.has(card.rarity))) {
				return false;
			}

			// Set filter
			if (selectedSet !== 'any') {
				if (!(selectedSet in card.releases)) {
					return false;
				}
			}

			// Format filter
			if (selectedFormat !== 'any') {
				const formatKey = selectedFormat as 'warcry' | 'attrition' | 'oldschool';
				if (!cardMatchesFormat(card, formatKey)) {
					return false;
				}
			}

			// Keyword filter with precedence: AND before OR
			if (selectedKeywords.length > 0) {
				const keywordMatches = evaluateSearchWithPrecedence(
					selectedKeywords,
					keywordOperators,
					(keyword) => card.keywords.includes(keyword as Keyword)
				);
				if (!keywordMatches) return false;
			}

			// Numerical filters
			// Cost filter: exclude Reaction and Command cards when using "less than"
			if (
				(costOperator === 'lower' && ['Reaction', 'Command'].includes(card.type)) ||
				!compareNumbers(card.cost, costOperator, costValue)
			) {
				console.log(card.type, costOperator);
				return false;
			}
			// Strength filter: exclude Tactic, Reaction, and Command cards when using "less than"
			if (
				(strengthOperator === 'lower' && ['Tactic', 'Reaction', 'Command'].includes(card.type)) ||
				!compareNumbers(card.strength, strengthOperator, strengthValue)
			) {
				return false;
			}
			// Tactic Points filter: exclude Tactic, Reaction, and Command cards when using "less than"
			if (
				(tacticPointsOperator === 'lower' &&
					['Tactic', 'Reaction', 'Command'].includes(card.type)) ||
				!compareNumbers(card.tacticPoints, tacticPointsOperator, tacticPointsValue)
			) {
				return false;
			}
			if (!compareNumbers(card.leadership, leadershipOperator, leadershipValue)) {
				return false;
			}
			if (!compareNumbers(card.die, dieOperator, dieValue)) {
				return false;
			}

			// Banned filter: non-Open formats exclude banned cards
			if (selectedFormat !== 'any' && card.banned) {
				return false;
			}

			// Unique filter
			if (uniqueFilter === 'yes' && !card.unique) {
				return false;
			}
			if (uniqueFilter === 'no' && card.unique) {
				return false;
			}

			return true;
		});
	}
</script>

{#if isDeckLoaded}
	<DeckBuilder
		{deck}
		{sideboard}
		{cards}
		onRemoveCard={removeFromDeck}
		onAddCard={addToDeck}
		onMoveToSideboard={moveToSideboard}
		onMoveFromSideboard={moveFromSideboard}
		onClearDeck={clearDeck}
		onLoadDeck={loadDeck}
	/>
{:else}
	<div class="flex h-16 items-center justify-center">
		<div class="text-gray-400">Loading...</div>
	</div>
{/if}

<Box>
	<!-- Search -->
	<div class="mb-4">
		<SearchInput bind:value={searchQuery} label="Name or text" />
	</div>

	<!-- Keyword Filter and Dropdowns Row -->
	<div class="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-[1fr_auto_auto_auto_auto]">
		<div class="col-span-2 lg:col-span-1">
			<SelectableInput
				mode="multi"
				items={keywords.map((k) => ({ id: k, name: k }))}
				bind:value={keywordInput}
				label="Keywords"
				selectedItems={selectedKeywords}
				operators={keywordOperators}
				onAddItem={addKeyword}
				onRemoveItem={removeKeyword}
				onToggleOperator={toggleOperator}
			/>
		</div>
		<div class="col-span-2 w-full lg:col-span-1 lg:w-56">
			<label for="set-filter" class="mb-2 block text-sm font-medium">Set</label>
			<select
				id="set-filter"
				bind:value={selectedSet}
				class="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
			>
				<option value="any">Any</option>
				{#each sets as set}
					<option value={set}>{setNames[set]}</option>
				{/each}
			</select>
		</div>
		<div class="w-full lg:w-40">
			<label for="format" class="mb-2 flex items-center gap-1 text-sm font-medium">
				<span>Format</span>
				<button
					type="button"
					onclick={() => (showFormatTooltip = !showFormatTooltip)}
					class="group relative cursor-help text-gray-400 hover:text-gray-300 focus:outline-none"
					aria-label="Format information"
				>
					ⓘ
					<span
						class="pointer-events-none absolute top-full left-0 z-10 mt-2 w-64 max-w-[calc(100vw-2rem)] rounded-lg bg-gray-900 p-3 text-left text-xs text-gray-300 shadow-xl lg:left-1/2 lg:-translate-x-1/2 {showFormatTooltip
							? 'block'
							: 'hidden'} group-hover:block"
					>
						{#each formats as format, index}
							<div class:mb-2={index < formats.length - 1}>
								<strong>{format.label}:</strong>
								{format.description}
							</div>
						{/each}
					</span>
				</button>
			</label>
			<select
				id="format"
				bind:value={selectedFormat}
				class="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
			>
				{#each formats as format}
					<option value={format.value}>{format.label}</option>
				{/each}
			</select>
		</div>
		<div class="w-full lg:w-28">
			<label for="unique-filter" class="mb-2 block text-sm font-medium">Unique</label>
			<select
				id="unique-filter"
				bind:value={uniqueFilter}
				class="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
			>
				<option value="any">Any</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</div>
	</div>

	<!-- Multi-Select Filters -->
	<div class="mb-3">
		<div class="grid grid-cols-1 gap-3 md:grid-cols-3">
			<!-- Faction Filter -->
			<div>
				<button
					onclick={() => (showFactionFilter = !showFactionFilter)}
					class="mb-2 flex w-full items-center gap-2 text-left text-sm font-medium hover:text-blue-400 focus:outline-none md:pointer-events-none md:hover:text-white"
				>
					<span class="transition-transform md:hidden {showFactionFilter ? 'rotate-90' : ''}">
						▶
					</span>
					<span>Faction</span>
					{#if !showFactionFilter && selectedFactions.size > 0}
						<span class="text-xs text-gray-400 md:hidden">
							({Array.from(selectedFactions).join(', ')})
						</span>
					{/if}
				</button>
				<div class="space-y-2 md:block {showFactionFilter ? 'block' : 'hidden'}">
					{#each factions as faction}
						<div class="flex items-center space-x-2">
							<input
								id="faction-{faction}"
								type="checkbox"
								checked={selectedFactions.has(faction)}
								onchange={() => (selectedFactions = toggleSelection(selectedFactions, faction))}
								class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
							/>
							<label for="faction-{faction}" class="cursor-pointer text-sm">{faction}</label>
						</div>
					{/each}
				</div>
			</div>

			<!-- Card Type Filter -->
			<div>
				<button
					onclick={() => (showCardTypeFilter = !showCardTypeFilter)}
					class="mb-2 flex w-full items-center gap-2 text-left text-sm font-medium hover:text-blue-400 focus:outline-none md:pointer-events-none md:hover:text-white"
				>
					<span class="transition-transform md:hidden {showCardTypeFilter ? 'rotate-90' : ''}">
						▶
					</span>
					<span>Type</span>
					{#if !showCardTypeFilter && selectedTypes.size > 0}
						<span class="text-xs text-gray-400 md:hidden">
							({Array.from(selectedTypes).join(', ')})
						</span>
					{/if}
				</button>
				<div class="space-y-2 md:block {showCardTypeFilter ? 'block' : 'hidden'}">
					{#each cardTypes as type}
						<div class="flex items-center space-x-2">
							<input
								id="type-{type}"
								type="checkbox"
								checked={selectedTypes.has(type)}
								onchange={() => (selectedTypes = toggleSelection(selectedTypes, type))}
								class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
							/>
							<label for="type-{type}" class="cursor-pointer text-sm">{type}</label>
						</div>
					{/each}
				</div>
			</div>

			<!-- Rarity Filter -->
			<div>
				<button
					onclick={() => (showRarityFilter = !showRarityFilter)}
					class="mb-2 flex w-full items-center gap-2 text-left text-sm font-medium hover:text-blue-400 focus:outline-none md:pointer-events-none md:hover:text-white"
				>
					<span class="transition-transform md:hidden {showRarityFilter ? 'rotate-90' : ''}">
						▶
					</span>
					<span>Rarity</span>
					{#if !showRarityFilter && selectedRarities.size > 0}
						<span class="text-xs text-gray-400 md:hidden">
							({Array.from(selectedRarities).join(', ')})
						</span>
					{/if}
				</button>
				<div class="space-y-2 md:block {showRarityFilter ? 'block' : 'hidden'}">
					{#each rarities as rarity}
						<div class="flex items-center space-x-2">
							<input
								id="rarity-{rarity}"
								type="checkbox"
								checked={selectedRarities.has(rarity)}
								onchange={() => (selectedRarities = toggleSelection(selectedRarities, rarity))}
								class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
							/>
							<label for="rarity-{rarity}" class="cursor-pointer text-sm">{rarity}</label>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Numerical Filters -->
	<div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
			<!-- Cost Filter -->
			<div>
				<label for="cost-operator" class="mb-2 block text-sm font-medium">Cost</label>
				<div class="flex space-x-2">
					<select
						id="cost-operator"
						bind:value={costOperator}
						class="w-20 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					>
						<option value="exact">=</option>
						<option value="higher">&gt;</option>
						<option value="lower">&lt;</option>
					</select>
					<select
						bind:value={costValue}
						class="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					>
						<option value="">Any</option>
						{#each costValues as value}
							<option {value}>{value}</option>
						{/each}
					</select>
				</div>
			</div>

			<!-- Strength Filter -->
			<div>
				<label for="strength-operator" class="mb-2 block text-sm font-medium">Strength</label>
				<div class="flex space-x-2">
					<select
						id="strength-operator"
						bind:value={strengthOperator}
						class="w-20 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					>
						<option value="exact">=</option>
						<option value="higher">&gt;</option>
						<option value="lower">&lt;</option>
					</select>
					<select
						bind:value={strengthValue}
						class="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					>
						<option value="">Any</option>
						{#each strengthValues as value}
							<option {value}>{value}</option>
						{/each}
					</select>
				</div>
			</div>

			<!-- Tactic Points Filter -->
			<div>
				<label for="tactic-points-operator" class="mb-2 block text-sm font-medium"
					>Tactic Points</label
				>
				<div class="flex space-x-2">
					<select
						id="tactic-points-operator"
						bind:value={tacticPointsOperator}
						class="w-20 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					>
						<option value="exact">=</option>
						<option value="higher">&gt;</option>
						<option value="lower">&lt;</option>
					</select>
					<select
						bind:value={tacticPointsValue}
						class="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					>
						<option value="">Any</option>
						{#each tacticPointsValues as value}
							<option {value}>{value}</option>
						{/each}
					</select>
				</div>
			</div>

			<!-- Leadership Filter -->
			<div>
				<label for="leadership-operator" class="mb-2 block text-sm font-medium">Leadership</label>
				<div class="flex space-x-2">
					<select
						id="leadership-operator"
						bind:value={leadershipOperator}
						class="w-20 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					>
						<option value="exact">=</option>
						<option value="higher">&gt;</option>
						<option value="lower">&lt;</option>
					</select>
					<select
						bind:value={leadershipValue}
						class="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					>
						<option value="">Any</option>
						{#each leadershipValues as value}
							<option {value}>{value}</option>
						{/each}
					</select>
				</div>
			</div>

			<!-- Die Filter -->
			<div>
				<label for="die-operator" class="mb-2 block text-sm font-medium">Die</label>
				<div class="flex space-x-2">
					<select
						id="die-operator"
						bind:value={dieOperator}
						class="w-20 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					>
						<option value="exact">=</option>
						<option value="higher">&gt;</option>
						<option value="lower">&lt;</option>
					</select>
					<select
						bind:value={dieValue}
						class="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					>
						<option value="">Any</option>
						{#each dieValues as value}
							<option {value}>{value}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
	</div>

	<!-- Results and Reset -->
	<div class="mt-4 border-t border-gray-600 pt-4">
		<ResultRow
			resultsCount={filteredCards.length}
			{isFiltering}
			onReset={resetFilters}
			{hasActiveFilters}
		/>
	</div>
</Box>

<!-- Cards List -->
<div class="space-y-4">
	{#each filteredCards as card, index (card.name + '-' + index)}
		<Card
			{card}
			{searchQuery}
			showFaqIcon
			isInDeck={deck.has(card.id)}
			onAddToDeck={() => addToDeck(card.id)}
			onclick={() => (selectedCardId = card.id)}
		/>
	{/each}
</div>

{#if filteredCards.length === 0 && !isFiltering}
	<div class="mt-8 text-center text-gray-400">
		<p class="text-lg">No cards found matching your filters.</p>
	</div>
{/if}

<!-- Footer -->
<footer class="	mt-auto pt-6 text-right text-xs text-gray-500">
	<a href="/about#privacy-policy" class="hover:text-gray-400">Privacy Policy </a>
</footer>

<CardImageModal cardId={selectedCardId} onclose={() => (selectedCardId = null)} />
