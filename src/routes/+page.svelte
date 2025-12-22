<script lang="ts">
	import {
		cards,
		factions,
		cardTypes,
		rarities,
		sets,
		keywords,
		dieValues,
		costValues,
		tacticPointsValues,
		strengthValues,
		leadershipValues,
		type Keyword
	} from '$lib/data/cards';
	import Card from '$lib/components/Card.svelte';

	let searchQuery = $state('');
	let selectedFactions = $state(new Set<string>());
	let selectedCardTypes = $state(new Set<string>());
	let selectedRarities = $state(new Set<string>());
	let selectedSets = $state(new Set<string>());
	let selectedFormat = $state('any');
	let bannedFilter = $state('no');
	let uniqueFilter = $state('any');
	let showSetFilter = $state(false);
	let showFactionFilter = $state(false);
	let showCardTypeFilter = $state(false);
	let showRarityFilter = $state(false);

	// Keyword filter state
	let keywordInput = $state('');
	let selectedKeywords = $state<Keyword[]>([]);
	let keywordOperators = $state<('union' | 'intersection')[]>([]); // operators between keywords
	let showKeywordSuggestions = $state(false);
	let selectedSuggestionIndex = $state(0);

	// Numerical filter states
	let costOperator = $state('exact');
	let costValue = $state('');
	let strengthOperator = $state('exact');
	let strengthValue = $state('');
	let tacticPointsOperator = $state('exact');
	let tacticPointsValue = $state('');
	let leadershipOperator = $state('exact');
	let leadershipValue = $state('');
	let dieOperator = $state('exact');
	let dieValue = $state('');

	// Filtered keyword suggestions
	const filteredSuggestions = $derived.by(() => {
		if (!keywordInput.trim()) return [];
		const input = keywordInput.toLowerCase();
		return keywords
			.filter((k) => !selectedKeywords.includes(k) && k.toLowerCase().includes(input))
			.slice(0, 10);
	});

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
			// Add a new 'union' operator for the new keyword (if not first)
			if (selectedKeywords.length > 1) {
				keywordOperators = [...keywordOperators, 'union'];
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
			i === index ? (op === 'union' ? 'intersection' : 'union') : op
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
		selectedCardTypes = new Set<string>();
		selectedRarities = new Set<string>();
		selectedSets = new Set<string>();
		selectedFormat = 'any';
		selectedKeywords = [];
		keywordOperators = [];
		keywordInput = '';
		bannedFilter = 'no';
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

	const filteredCards = $derived.by(() => {
		return cards.filter((card) => {
			// Search filter
			if (searchQuery) {
				const query = searchQuery.toLowerCase();

				// Check if query contains operators
				const hasOperators = query.includes('&') || query.includes('|');

				if (hasOperators) {
					// Split by | first (OR has lower precedence)
					const orGroups = query.split('|').map((orTerm) => orTerm.trim());

					// Each OR group passes if all its AND terms match
					const orGroupMatches = orGroups.some((orGroup) => {
						// Split by & (AND has higher precedence)
						const andTerms = orGroup
							.split('&')
							.map((term) => term.trim())
							.filter((t) => t);

						// All AND terms must match
						return andTerms.every((term) => {
							const nameMatch = card.name.toLowerCase().includes(term);
							const textMatch = card.text.toLowerCase().includes(term);
							return nameMatch || textMatch;
						});
					});

					if (!orGroupMatches) {
						return false;
					}
				} else {
					// Simple search without operators
					const nameMatch = card.name.toLowerCase().includes(query);
					const textMatch = card.text.toLowerCase().includes(query);
					if (!nameMatch && !textMatch) {
						return false;
					}
				}
			}

			// Multi-select faction filter
			if (selectedFactions.size > 0 && !selectedFactions.has(card.faction)) {
				return false;
			}

			// Multi-select card type filter
			if (selectedCardTypes.size > 0 && !selectedCardTypes.has(card.type)) {
				return false;
			}

			// Multi-select rarity filter
			if (selectedRarities.size > 0 && (!card.rarity || !selectedRarities.has(card.rarity))) {
				return false;
			}

			// Set filter - card must be released in at least one of the selected sets
			if (selectedSets.size > 0) {
				const cardSets = Object.keys(card.releases);
				const hasMatchingSet = cardSets.some((set) => selectedSets.has(set));
				if (!hasMatchingSet) {
					return false;
				}
			}

			// Format filter
			if (selectedFormat !== 'any') {
				const cardReleases = card.releases;
				const warcryFormatSets = [
					'WarCry',
					'Winds of Magic',
					'Siege of Darkness',
					'Dogs of War',
					'Path of Glory',
					'Chivalry and Deceit',
					'Legions of Chaos',
					'Champions',
					'Siege of Middenheim',
					'Harbingers of War',
					'Death and Honour',
					'Bringers of Darkness',
					'Legends',
					'Promo (WC)'
				];
				const attritionFormatSets = [
					'Bearers of Redemption',
					'Valor and Treachery',
					'Swords of Retribution',
					'War of Attrition',
					'Hand of Fate',
					'Marks of Power',
					'Veterans of Battle',
					'Promo (WA)'
				];
				const oldSchoolBaseSets = ['WarCry', 'Winds of Magic', 'Siege of Darkness'];

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
						cardReleases['Promo (WC)'] !== undefined && cardReleases['Promo (WC)']! <= 40;
					if (!hasBaseSet && !hasPromoWCWithLowNumber) return false;
				}
			}

			// Keyword filter with OR precedence (OR evaluates before AND)
			if (selectedKeywords.length > 0) {
				if (selectedKeywords.length === 1) {
					// Single keyword
					if (!card.keywords.includes(selectedKeywords[0])) return false;
				} else {
					// Multiple keywords with operators
					// Step 1: Group consecutive OR operations
					const orGroups: Keyword[][] = [];
					let currentGroup: Keyword[] = [selectedKeywords[0]];

					for (let i = 0; i < keywordOperators.length; i++) {
						if (keywordOperators[i] === 'union') {
							// Continue current OR group
							currentGroup.push(selectedKeywords[i + 1]);
						} else {
							// AND operator, close current group and start new one
							orGroups.push(currentGroup);
							currentGroup = [selectedKeywords[i + 1]];
						}
					}
					orGroups.push(currentGroup);

					// Step 2: Each OR group must have at least one match, then AND all groups
					const allGroupsMatch = orGroups.every((group) =>
						group.some((keyword) => card.keywords.includes(keyword))
					);

					if (!allGroupsMatch) return false;
				}
			}

			// Numerical filters
			if (!compareNumbers(card.cost, costOperator, costValue)) {
				return false;
			}
			if (!compareNumbers(card.strength, strengthOperator, strengthValue)) {
				return false;
			}
			if (!compareNumbers(card.tacticPoints, tacticPointsOperator, tacticPointsValue)) {
				return false;
			}
			if (!compareNumbers(card.leadership, leadershipOperator, leadershipValue)) {
				return false;
			}
			if (!compareNumbers(card.die, dieOperator, dieValue)) {
				return false;
			}

			// Banned filter
			if (bannedFilter === 'yes' && !card.banned) {
				return false;
			}
			if (bannedFilter === 'no' && card.banned) {
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
	});
</script>

<div class="min-h-screen bg-gray-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-8">
		<header class="mb-8">
			<h1 class="mb-2 text-4xl font-bold">WarCry Deckbuilder</h1>
		</header>

		<!-- Filters Section -->
		<div class="mb-6 rounded-lg bg-gray-800 p-4 shadow-xl">
			<!-- Search and Format -->
			<div class="mb-4 flex gap-4">
				<div class="flex-1">
					<label for="search" class="mb-2 block text-sm font-medium">Search</label>
					<input
						id="search"
						type="text"
						bind:value={searchQuery}
						placeholder="Search by name or card text..."
						class="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
				</div>
				<div class="w-48">
					<label for="format" class="mb-2 block text-sm font-medium">Format</label>
					<select
						id="format"
						bind:value={selectedFormat}
						class="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					>
						<option value="any">Open</option>
						<option value="warcry">WarCry</option>
						<option value="attrition">Attrition</option>
						<option value="oldschool">Old School</option>
					</select>
				</div>
				<div class="flex items-end">
					<button
						onclick={resetFilters}
						class="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
					>
						Reset Filters
					</button>
				</div>
			</div>

			<!-- Keyword Filter -->
			<div class="mb-6">
				<label class="mb-2 block text-sm font-medium">Keywords</label>
				<div class="relative">
					<div
						class="flex min-h-[42px] flex-wrap items-center gap-2 rounded-lg border border-gray-600 bg-gray-700 px-3"
					>
						{#each selectedKeywords as keyword, index}
							<button
								onclick={() => removeKeyword(keyword)}
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
									{keywordOperators[index] === 'union' ? '|' : '&'}
								</button>
							{/if}
						{/each}
						<input
							type="text"
							bind:value={keywordInput}
							onkeydown={handleKeywordInput}
							onfocus={() => (showKeywordSuggestions = true)}
							onblur={() => setTimeout(() => (showKeywordSuggestions = false), 200)}
							oninput={() => {
								showKeywordSuggestions = true;
								selectedSuggestionIndex = 0;
							}}
							placeholder={selectedKeywords.length === 0 ? 'Type to search keywords...' : ''}
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

			<!-- Multi-Select Filters -->
			<div class="mb-6">
				<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
					<!-- Faction Filter -->
					<div>
						<button
							onclick={() => (showFactionFilter = !showFactionFilter)}
							class="mb-2 flex w-full items-center gap-2 text-left text-sm font-medium hover:text-blue-400 focus:outline-none"
						>
							<span class="transition-transform {showFactionFilter ? 'rotate-90' : ''}"> ▶ </span>
							<span>Faction</span>
							{#if !showFactionFilter && selectedFactions.size > 0}
								<span class="text-xs text-gray-400">
									({Array.from(selectedFactions).join(', ')})
								</span>
							{/if}
						</button>
						{#if showFactionFilter}
							<div class="space-y-2">
								{#each factions as faction}
									<label class="flex items-center space-x-2">
										<input
											type="checkbox"
											checked={selectedFactions.has(faction)}
											onchange={() =>
												(selectedFactions = toggleSelection(selectedFactions, faction))}
											class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
										/>
										<span class="text-sm">{faction}</span>
									</label>
								{/each}
							</div>
						{/if}
					</div>

					<!-- Card Type Filter -->
					<div>
						<button
							onclick={() => (showCardTypeFilter = !showCardTypeFilter)}
							class="mb-2 flex w-full items-center gap-2 text-left text-sm font-medium hover:text-blue-400 focus:outline-none"
						>
							<span class="transition-transform {showCardTypeFilter ? 'rotate-90' : ''}"> ▶ </span>
							<span>Card Type</span>
							{#if !showCardTypeFilter && selectedCardTypes.size > 0}
								<span class="text-xs text-gray-400">
									({Array.from(selectedCardTypes).join(', ')})
								</span>
							{/if}
						</button>
						{#if showCardTypeFilter}
							<div class="space-y-2">
								{#each cardTypes as type}
									<label class="flex items-center space-x-2">
										<input
											type="checkbox"
											checked={selectedCardTypes.has(type)}
											onchange={() =>
												(selectedCardTypes = toggleSelection(selectedCardTypes, type))}
											class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
										/>
										<span class="text-sm">{type}</span>
									</label>
								{/each}
							</div>
						{/if}
					</div>

					<!-- Rarity Filter -->
					<div>
						<button
							onclick={() => (showRarityFilter = !showRarityFilter)}
							class="mb-2 flex w-full items-center gap-2 text-left text-sm font-medium hover:text-blue-400 focus:outline-none"
						>
							<span class="transition-transform {showRarityFilter ? 'rotate-90' : ''}"> ▶ </span>
							<span>Rarity</span>
							{#if !showRarityFilter && selectedRarities.size > 0}
								<span class="text-xs text-gray-400">
									({Array.from(selectedRarities).join(', ')})
								</span>
							{/if}
						</button>
						{#if showRarityFilter}
							<div class="space-y-2">
								{#each rarities as rarity}
									<label class="flex items-center space-x-2">
										<input
											type="checkbox"
											checked={selectedRarities.has(rarity)}
											onchange={() =>
												(selectedRarities = toggleSelection(selectedRarities, rarity))}
											class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
										/>
										<span class="text-sm">{rarity}</span>
									</label>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>

			<!-- Set Filter -->
			<div class="mb-6">
				<button
					onclick={() => (showSetFilter = !showSetFilter)}
					class="mb-2 flex w-full items-center gap-2 text-left text-sm font-medium hover:text-blue-400 focus:outline-none"
				>
					<span class="transition-transform {showSetFilter ? 'rotate-90' : ''}"> ▶ </span>
					<span>Set</span>
					{#if !showSetFilter && selectedSets.size > 0}
						<span class="text-xs text-gray-400">
							({Array.from(selectedSets).join(', ')})
						</span>
					{/if}
				</button>
				{#if showSetFilter}
					<div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
						{#each sets as set}
							<label class="flex items-center space-x-2">
								<input
									type="checkbox"
									checked={selectedSets.has(set)}
									onchange={() => (selectedSets = toggleSelection(selectedSets, set))}
									class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
								/>
								<span class="text-sm">{set}</span>
							</label>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Numerical Filters -->
			<div class="mb-6">
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
					<!-- Die Filter -->
					<div>
						<label class="mb-2 block text-xs font-medium text-gray-400">Die</label>
						<div class="flex space-x-2">
							<select
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

					<!-- Cost Filter -->
					<div>
						<label class="mb-2 block text-xs font-medium text-gray-400">Cost</label>
						<div class="flex space-x-2">
							<select
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

					<!-- Tactic Points Filter -->
					<div>
						<label class="mb-2 block text-xs font-medium text-gray-400">Tactic Points</label>
						<div class="flex space-x-2">
							<select
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
						<label class="mb-2 block text-xs font-medium text-gray-400">Leadership</label>
						<div class="flex space-x-2">
							<select
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

					<!-- Strength Filter -->
					<div>
						<label class="mb-2 block text-xs font-medium text-gray-400">Strength</label>
						<div class="flex space-x-2">
							<select
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
				</div>
			</div>

			<!-- Other Filters -->
			<div class="flex space-x-4">
				<div class="flex flex-col space-y-1">
					<label class="text-sm font-medium">Banned</label>
					<select
						bind:value={bannedFilter}
						class="rounded border-gray-600 bg-gray-700 px-2 py-1 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
					>
						<option value="any">Any</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
				<div class="flex flex-col space-y-1">
					<label class="text-sm font-medium">Unique</label>
					<select
						bind:value={uniqueFilter}
						class="rounded border-gray-600 bg-gray-700 px-2 py-1 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
					>
						<option value="any">Any</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
			</div>
		</div>

		<!-- Results Count -->
		<div class="mb-4 text-sm text-gray-400">
			Showing {filteredCards.length} of {cards.length} cards
		</div>

		<!-- Cards List -->
		<div class="space-y-4">
			{#each filteredCards as card, index (card.name + '-' + index)}
				<Card {card} {searchQuery} />
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
