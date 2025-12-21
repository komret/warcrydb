<script lang="ts">
	import { cards } from '$lib/data/cards';
	import Card from '$lib/components/Card.svelte';

	let searchQuery = $state('');
	let selectedFactions = $state(new Set<string>());
	let selectedCardTypes = $state(new Set<string>());
	let selectedRarities = $state(new Set<string>());
	let showBannedCards = $state(true);
	let showUniqueOnly = $state(false);

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

	const factions = ['Grand Alliance', 'Hordes of Darkness', 'Neutral'];
	const cardTypes = ['Attachment', 'Command', 'Reaction', 'Tactic', 'Unit'];
	const rarities = [
		'Common',
		'Common (Fixed)',
		'Fixed',
		'Promo',
		'Rare',
		'Rare (Fixed)',
		'Super rare',
		'Uncommon',
		'Uncommon (Fixed)'
	];

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
		filterValue: string
	): boolean {
		if (!filterValue) return true;
		const normalized = normalizeValue(cardValue);
		const filter = parseInt(filterValue);
		if (isNaN(filter)) return true;

		switch (operator) {
			case 'exact':
				return normalized === filter;
			case 'higher':
				return normalized > filter;
			case 'lower':
				return normalized < filter;
			default:
				return true;
		}
	}

	const filteredCards = $derived.by(() => {
		return cards.filter((card) => {
			// Search filter
			if (searchQuery) {
				const query = searchQuery.toLowerCase();
				const nameMatch = card.name.toLowerCase().includes(query);
				const textMatch = card.cardText.toLowerCase().includes(query);
				if (!nameMatch && !textMatch) {
					return false;
				}
			}

			// Multi-select faction filter
			if (selectedFactions.size > 0 && !selectedFactions.has(card.faction)) {
				return false;
			}

			// Multi-select card type filter
			if (selectedCardTypes.size > 0 && !selectedCardTypes.has(card.cardType)) {
				return false;
			}

			// Multi-select rarity filter
			if (selectedRarities.size > 0 && !selectedRarities.has(card.rarity)) {
				return false;
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
			if (!showBannedCards && card.banned) {
				return false;
			}

			// Unique filter
			if (showUniqueOnly && !card.unique) {
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
			<p class="text-gray-400">Browse and filter cards for the WarCry card game</p>
		</header>

		<!-- Filters Section -->
		<div class="mb-6 rounded-lg bg-gray-800 p-4 shadow-xl">
			<!-- Search -->
			<div class="mb-4">
				<label for="search" class="mb-2 block text-sm font-medium">Search</label>
				<input
					id="search"
					type="text"
					bind:value={searchQuery}
					placeholder="Search by name or card text..."
					class="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				/>
			</div>

			<!-- Multi-Select Filters -->
			<div class="mb-6">
				<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
					<!-- Faction Filter -->
					<div>
						<label class="mb-2 block text-sm font-medium">Faction</label>
						<div class="space-y-2">
							{#each factions as faction}
								<label class="flex items-center space-x-2">
									<input
										type="checkbox"
										checked={selectedFactions.has(faction)}
										onchange={() => (selectedFactions = toggleSelection(selectedFactions, faction))}
										class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
									/>
									<span class="text-sm">{faction}</span>
								</label>
							{/each}
						</div>
					</div>

					<!-- Card Type Filter -->
					<div>
						<label class="mb-2 block text-sm font-medium">Card Type</label>
						<div class="space-y-2">
							{#each cardTypes as type}
								<label class="flex items-center space-x-2">
									<input
										type="checkbox"
										checked={selectedCardTypes.has(type)}
										onchange={() => (selectedCardTypes = toggleSelection(selectedCardTypes, type))}
										class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
									/>
									<span class="text-sm">{type}</span>
								</label>
							{/each}
						</div>
					</div>

					<!-- Rarity Filter -->
					<div>
						<label class="mb-2 block text-sm font-medium">Rarity</label>
						<div class="space-y-2">
							{#each rarities as rarity}
								<label class="flex items-center space-x-2">
									<input
										type="checkbox"
										checked={selectedRarities.has(rarity)}
										onchange={() => (selectedRarities = toggleSelection(selectedRarities, rarity))}
										class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
									/>
									<span class="text-sm">{rarity}</span>
								</label>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<!-- Numerical Filters -->
			<div class="mb-6">
				<h3 class="mb-3 text-sm font-medium">Numerical Filters</h3>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
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
							<input
								type="number"
								bind:value={costValue}
								placeholder="Value"
								class="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							/>
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
							<input
								type="number"
								bind:value={strengthValue}
								placeholder="Value"
								class="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							/>
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
							<input
								type="number"
								bind:value={tacticPointsValue}
								placeholder="Value"
								class="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							/>
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
							<input
								type="number"
								bind:value={leadershipValue}
								placeholder="Value"
								class="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							/>
						</div>
					</div>

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
							<input
								type="number"
								bind:value={dieValue}
								placeholder="Value"
								class="flex-1 rounded-lg border border-gray-600 bg-gray-700 px-2 py-1 text-sm text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							/>
						</div>
					</div>
				</div>
			</div>

			<!-- Other Filters -->
			<div class="flex space-x-4">
				<label class="flex items-center space-x-2">
					<input
						type="checkbox"
						bind:checked={showBannedCards}
						class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
					/>
					<span class="text-sm">Show banned cards</span>
				</label>
				<label class="flex items-center space-x-2">
					<input
						type="checkbox"
						bind:checked={showUniqueOnly}
						class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
					/>
					<span class="text-sm">Unique only</span>
				</label>
			</div>
		</div>

		<!-- Results Count -->
		<div class="mb-4 text-sm text-gray-400">
			Showing {filteredCards.length} of {cards.length} cards
		</div>

		<!-- Cards Grid -->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each filteredCards as card, index (card.name + '-' + card.set + '-' + card.number + '-' + index)}
				<Card {card} />
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
