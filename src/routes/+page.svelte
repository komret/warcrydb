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
	import Card from '$lib/components/Card.svelte';
	import CardImageModal from '$lib/components/CardImageModal.svelte';
	import Header from '$lib/components/Header.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import { matchesSearch } from '$lib/utils/matchesSearch';

	// Type definitions
	type NumericOperator = 'exact' | 'higher' | 'lower';

	// Format definitions
	const formats = [
		{
			value: 'any',
			label: 'Open',
			description: 'all cards, including banned, are eligible'
		},
		{
			value: 'warcry',
			label: 'WarCry',
			description: 'only cards from the initial block are eligible (BD or older)'
		},
		{
			value: 'attrition',
			label: 'Attrition',
			description:
				'only cards from the Attrition block are eligible (cards marked by the axe symbol - BR or newer)'
		},
		{
			value: 'oldschool',
			label: 'Old School',
			description: 'only cards from the first three sets and promos from that era are eligible'
		}
	];

	let searchQuery = $state('');

	let selectedFactions = $state(new Set<string>());
	let selectedTypes = $state(new Set<string>());
	let selectedRarities = $state(new Set<string>());
	let selectedSet = $state<(typeof sets)[number] | 'any'>('any');
	let selectedFormat = $state<(typeof formats)[number]['value'] | 'any'>('any');
	let uniqueFilter = $state<'any' | 'yes' | 'no'>('any');

	// Check if desktop (768px or wider) to set default open/closed state
	const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
	let showFactionFilter = $state(isDesktop);
	let showCardTypeFilter = $state(isDesktop);
	let showRarityFilter = $state(isDesktop);

	// Format tooltip state
	let showFormatTooltip = $state(false);

	// Keyword filter state
	let keywordInput = $state('');
	let selectedKeywords = $state<Keyword[]>([]);
	let keywordOperators = $state<('|' | '&')[]>([]); // operators between keywords
	let showKeywordSuggestions = $state(false);
	let selectedSuggestionIndex = $state(0);

	// Numerical filter states
	let costOperator = $state<NumericOperator>('exact');
	let costValue = $state('');
	let strengthOperator = $state<NumericOperator>('exact');
	let strengthValue = $state('');
	let tacticPointsOperator = $state<NumericOperator>('exact');
	let tacticPointsValue = $state('');
	let leadershipOperator = $state<NumericOperator>('exact');
	let leadershipValue = $state('');
	let dieOperator = $state<NumericOperator>('exact');
	let dieValue = $state('');

	// Modal state
	let selectedCardId = $state<string | null>(null);

	// Filtered results (updated after debounce)
	let filteredCards = $state<typeof cards>([]);
	let filterDebounceTimer: ReturnType<typeof setTimeout> | null = null;

	// Watch for filter changes and trigger debounced filter update
	$effect(() => {
		// Read all filter values to track changes
		const currentSearch = searchQuery; // Watch for search changes
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

		// Reset timer and trigger debounced filter execution
		if (filterDebounceTimer) {
			clearTimeout(filterDebounceTimer);
		}

		// Use longer delay for search (more typing expected), shorter for other filters
		const delay = currentSearch ? 300 : 50;
		filterDebounceTimer = setTimeout(() => {
			filteredCards = computeFilteredCards();
		}, delay);

		return () => {
			if (filterDebounceTimer) {
				clearTimeout(filterDebounceTimer);
			}
		};
	});

	// Filtered keyword suggestions
	const filteredSuggestions = $derived.by(() => {
		if (!keywordInput.trim()) return [];
		const input = keywordInput.toLowerCase();
		return keywords
			.filter((k) => !selectedKeywords.includes(k) && k.toLowerCase().includes(input))
			.slice(0, 10);
	});

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
		showKeywordSuggestions = false;
		selectedSuggestionIndex = 0;
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

	function handleKeywordInput(e: KeyboardEvent) {
		const input = e.target as HTMLInputElement;

		if (e.key === 'Backspace' && keywordInput === '' && selectedKeywords.length > 0) {
			// Remove last keyword on backspace when input is empty
			e.preventDefault();
			const lastKeyword = selectedKeywords[selectedKeywords.length - 1];
			removeKeyword(lastKeyword);
		} else if (e.key === 'Enter' || e.key === 'Tab') {
			e.preventDefault();
			if (filteredSuggestions.length > 0) {
				addKeyword(filteredSuggestions[selectedSuggestionIndex]);
			}
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			selectedSuggestionIndex = Math.min(
				selectedSuggestionIndex + 1,
				filteredSuggestions.length - 1
			);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, 0);
		} else if (e.key === 'Escape') {
			showKeywordSuggestions = false;
		}
	}

	function resetFilters() {
		searchQuery = '';
		selectedFactions = new Set<string>();
		selectedTypes = new Set<string>();
		selectedRarities = new Set<string>();
		selectedSet = 'any';
		selectedFormat = 'any';
		selectedKeywords = [];
		keywordOperators = [];
		keywordInput = '';
		uniqueFilter = 'any';
		costOperator = 'exact';
		costValue = '';
		strengthOperator = 'exact';
		strengthValue = '';
		tacticPointsOperator = 'exact';
		tacticPointsValue = '';
		leadershipOperator = 'exact';
		leadershipValue = '';
		dieOperator = 'exact';
		dieValue = '';
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
				const cardReleases = card.releases;
				const warcryFormatSets = [
					'WC',
					'WM',
					'SD',
					'DW',
					'PG',
					'CD',
					'LC',
					'CC',
					'SM',
					'HW',
					'DH',
					'LW',
					'PW'
				];
				const attritionFormatSets = ['BR', 'VT', 'SR', 'WA', 'HF', 'MP', 'VB', 'PA'];
				const oldSchoolBaseSets = ['WC', 'WM', 'SD'];

				if (selectedFormat === 'warcry') {
					const hasWarcrySet = Object.keys(cardReleases).some((set) =>
						warcryFormatSets.includes(set)
					);
					if (!hasWarcrySet) return false;
				} else if (selectedFormat === 'attrition') {
					const hasAttritionSet = Object.keys(cardReleases).some((set) =>
						attritionFormatSets.includes(set)
					);
					if (!hasAttritionSet) return false;
				} else if (selectedFormat === 'oldschool') {
					// Old School: Base sets OR Promo (WC) with card number <= 40
					const hasBaseSet = Object.keys(cardReleases).some((set) =>
						oldSchoolBaseSets.includes(set)
					);
					const hasPromoWCWithLowNumber =
						cardReleases['PW'] !== undefined && cardReleases['PW']! <= 40;
					if (!hasBaseSet && !hasPromoWCWithLowNumber) return false;
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

<div class="min-h-screen bg-gray-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-8">
		<Header currentPage="home" />

		<!-- Filters Section -->
		<div class="mb-4 rounded-lg bg-gray-800 p-4 shadow-xl">
			<!-- Search -->
			<div class="mb-4">
				<SearchInput bind:value={searchQuery} label="Title or text" />
			</div>

			<!-- Keyword Filter and Dropdowns Row -->
			<div class="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-[1fr_auto_auto_auto_auto]">
				<div class="col-span-2 lg:col-span-1">
					<label for="keyword-input" class="mb-2 block text-sm font-medium">Keywords</label>
					<div class="relative">
						<div
							class="flex min-h-[42px] flex-wrap items-center gap-2 rounded-lg border border-gray-600 bg-gray-700 px-3"
						>
							{#each selectedKeywords as keyword, index}
								<button
									onclick={() => removeKeyword(keyword)}
									title="Remove keyword"
									class="text-xs font-medium text-gray-300 hover:text-white focus:outline-none"
									aria-label="Remove {keyword}"
								>
									{keyword}
								</button>
								{#if index < selectedKeywords.length - 1}
									<button
										onclick={() => toggleOperator(index)}
										class="rounded bg-gray-600 px-2 py-1 text-xs font-medium text-white hover:bg-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
									>
										{keywordOperators[index] === '|' ? '|' : '&'}
									</button>
								{/if}
							{/each}
							<input
								id="keyword-input"
								type="text"
								bind:value={keywordInput}
								onkeydown={handleKeywordInput}
								onfocus={() => (showKeywordSuggestions = true)}
								onblur={() => setTimeout(() => (showKeywordSuggestions = false), 200)}
								oninput={() => {
									showKeywordSuggestions = true;
									selectedSuggestionIndex = 0;
								}}
								class="flex-1 border-0 bg-transparent text-white placeholder-gray-400 focus:ring-0 focus:outline-none"
							/>
						</div>
						{#if showKeywordSuggestions && filteredSuggestions.length > 0}
							<div
								class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-600 bg-gray-700 shadow-lg"
							>
								{#each filteredSuggestions as suggestion, index}
									<button
										type="button"
										onclick={() => addKeyword(suggestion)}
										class="w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-600 focus:bg-gray-600 focus:outline-none {index ===
										selectedSuggestionIndex
											? 'bg-gray-600'
											: ''}"
									>
										{suggestion}
									</button>
								{/each}
							</div>
						{/if}
					</div>
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
						<label for="leadership-operator" class="mb-2 block text-sm font-medium"
							>Leadership</label
						>
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
		</div>

		<!-- Results Count -->
		<div class="mb-4 flex items-center justify-between">
			<div class="text-sm text-gray-400">
				{filteredCards.length} results
			</div>
			<button
				onclick={resetFilters}
				class="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
			>
				<span>Reset filters</span>
			</button>
		</div>

		<!-- Cards List -->
		<div class="space-y-4">
			{#each filteredCards as card, index (card.name + '-' + index)}
				<Card {card} {searchQuery} onclick={() => (selectedCardId = card.id)} />
			{/each}
		</div>

		{#if filteredCards.length === 0}
			<div class="mt-8 text-center text-gray-400">
				<p class="text-lg">No cards found matching your filters.</p>
				<p class="mt-2">Try adjusting your search criteria.</p>
			</div>
		{/if}
	</div>
</div>

<CardImageModal cardId={selectedCardId} onclose={() => (selectedCardId = null)} />
