<script lang="ts">
	import type { Card } from '$lib/data/cards';

	type Props = {
		card: Card;
		searchQuery?: string;
	};

	let { card, searchQuery = '' }: Props = $props();

	// Highlight search terms in card text
	const highlightSearchTerms = (html: string, query: string): string => {
		if (!query.trim()) return html;

		// Parse search query for operators
		const hasOperators = query.includes('&') || query.includes('|');

		if (hasOperators) {
			// Split by | first (OR has lower precedence)
			const orGroups = query.split('|').map((orTerm) => orTerm.trim());

			// Collect all unique search terms
			const allTerms = new Set<string>();
			orGroups.forEach((orGroup) => {
				const andTerms = orGroup
					.split('&')
					.map((term) => term.trim())
					.filter((t) => t);
				andTerms.forEach((term) => allTerms.add(term));
			});

			// Highlight all terms
			let result = html;
			allTerms.forEach((term) => {
				const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
				const regex = new RegExp(`(${escapedTerm})`, 'gi');
				result = result.replace(regex, '<mark class="bg-yellow-300 text-gray-900">$1</mark>');
			});
			return result;
		} else {
			// Simple search - highlight the query
			const escapedQuery = query.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			const regex = new RegExp(`(${escapedQuery})`, 'gi');
			return html.replace(regex, '<mark class="bg-yellow-300 text-gray-900">$1</mark>');
		}
	};

	const highlightedCardText = $derived(
		card.cardText ? highlightSearchTerms(card.cardText, searchQuery) : ''
	);

	// Determine cost circle color based on card type
	const getCostCircleColor = (cardType: string): string => {
		switch (cardType) {
			case 'Unit':
			case 'Attachment':
				return 'bg-[#FC922B]'; // Gold
			case 'Tactic':
				return 'bg-[#C6C144]'; // Yellow
			case 'Command':
				return 'bg-[#538DB2]'; // Blue
			case 'Reaction':
				return 'bg-[#BD362C]'; // Red
			default:
				return 'bg-gray-500';
		}
	};

	// Determine strength circle color based on faction
	const getStrengthCircleColor = (faction: string): string => {
		switch (faction) {
			case 'Neutral':
				return 'bg-[#723820]';
			case 'Hordes of Darkness':
				return 'bg-[#3F5146]';
			case 'Grand Alliance':
				return 'bg-[#D7DCD5]';
			default:
				return 'bg-gray-500';
		}
	};

	const costCircleColor = getCostCircleColor(card.cardType);
	const strengthCircleColor = getStrengthCircleColor(card.faction);
</script>

<div
	class="rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-lg transition-all hover:border-blue-500 hover:shadow-xl"
>
	<!-- Two column layout on larger screens, single column on mobile -->
	<div class="grid grid-cols-1 gap-4 md:grid-cols-[minmax(auto,380px)_1fr]">
		<!-- First column: Stats and metadata (3x3 grid) -->
		<div class="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-2">
			<!-- Row 1 -->
			<div class="flex items-center justify-center">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-full {costCircleColor} text-lg font-bold text-gray-900"
				>
					{card.cost ?? ''}
				</div>
			</div>
			<div class="text-center font-bold text-balance text-white">{card.name}</div>
			<div class="flex items-center justify-center">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-full {strengthCircleColor} text-lg font-bold {card.faction ===
					'Grand Alliance'
						? 'text-gray-900'
						: 'text-gray-300'}"
				>
					{card.strength ?? ''}
				</div>
			</div>

			<!-- Row 2 -->
			<div></div>
			<div class="flex flex-wrap justify-center gap-1 text-xs text-gray-300">
				{#if card.keywords.length > 0}
					{#each card.keywords as keyword, index}
						<span>{keyword}</span>
						{#if index < card.keywords.length - 1}
							<span class="flex items-center">•</span>
						{/if}
					{/each}
				{/if}
			</div>
			<div class="text-center text-sm font-bold text-gray-300">
				{#if card.tacticPoints !== undefined}{card.tacticPoints}{/if}
			</div>

			<!-- Row 3 -->
			<div class="flex items-center justify-center text-gray-400">
				{#if card.die !== undefined}
					{#if card.die === 1}
						<div class="grid h-8 w-8 place-items-center">
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
						</div>
					{:else if card.die === 2}
						<div class="grid h-8 w-8 grid-cols-2 gap-2 p-1">
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div></div>
							<div></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
						</div>
					{:else if card.die === 3}
						<div class="grid h-8 w-8 grid-cols-3 gap-1 p-1">
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div></div>
							<div></div>
							<div></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div></div>
							<div></div>
							<div></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
						</div>
					{:else if card.die === 4}
						<div class="grid h-8 w-8 grid-cols-2 gap-2 p-1">
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
						</div>
					{:else if card.die === 5}
						<div class="grid h-8 w-8 grid-cols-3 gap-1 p-1">
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
						</div>
					{:else if card.die === 6}
						<div class="grid h-8 w-8 grid-cols-3 gap-1 p-1">
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
							<div></div>
							<div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
						</div>
					{/if}
				{/if}
			</div>
			<div class="text-center font-bold text-gray-300">
				{#if card.leadership !== undefined}{card.leadership}{/if}
			</div>
			<div class="text-center text-xl text-[#FC922B]">
				{#if card.unique}*{/if}
			</div>
		</div>

		<!-- Second column: Card text -->
		<div class="space-y-2 text-sm text-gray-300">
			{#if card.cardText}
				{@html highlightedCardText}
			{/if}
		</div>
	</div>
</div>
