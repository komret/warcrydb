<script lang="ts">
	import type { Card } from '$lib/data/cards';

	type Props = {
		card: Card;
	};

	let { card }: Props = $props();
</script>

<div
	class="rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-lg transition-all hover:border-blue-500 hover:shadow-xl"
>
	<div class="mb-3 flex items-start justify-between">
		<div class="flex-1">
			<h3 class="text-lg font-bold text-white">{card.name}</h3>
			{#if card.unique}
				<span
					class="inline-block rounded bg-purple-600 px-2 py-0.5 text-xs font-semibold text-white"
					>Unique</span
				>
			{/if}
		</div>
		{#if card.cost !== undefined}
			<div
				class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 font-bold text-gray-900"
			>
				{card.cost}
			</div>
		{/if}
	</div>

	<div class="mb-3 space-y-1 text-sm">
		<div class="flex justify-between text-gray-300">
			<span class="font-semibold">Type:</span>
			<span>{card.cardType}</span>
		</div>
		<div class="flex justify-between text-gray-300">
			<span class="font-semibold">Faction:</span>
			<span>{card.faction}</span>
		</div>
		<div class="flex justify-between text-gray-300">
			<span class="font-semibold">Rarity:</span>
			<span>{card.rarity}</span>
		</div>
		{#if card.strength !== undefined}
			<div class="flex justify-between text-gray-300">
				<span class="font-semibold">Strength:</span>
				<span>{card.strength}</span>
			</div>
		{/if}
		{#if card.tacticPoints !== undefined}
			<div class="flex justify-between text-gray-300">
				<span class="font-semibold">Tactic Points:</span>
				<span>{card.tacticPoints}</span>
			</div>
		{/if}
		{#if card.leadership !== undefined}
			<div class="flex justify-between text-gray-300">
				<span class="font-semibold">Leadership:</span>
				<span>{card.leadership}</span>
			</div>
		{/if}
	</div>

	{#if card.keywords.length > 0}
		<div class="mb-3 flex flex-wrap gap-1">
			{#each card.keywords as keyword}
				<span class="rounded bg-blue-600 px-2 py-0.5 text-xs font-medium text-white">{keyword}</span
				>
			{/each}
		</div>
	{/if}

	{#if card.cardText}
		<p class="text-sm text-gray-400 italic">{card.cardText}</p>
	{/if}

	<div class="mt-3 border-t border-gray-700 pt-2 text-xs text-gray-500">
		Set {card.set} • #{card.number}
		{#if card.banned}
			<span class="ml-2 rounded bg-red-600 px-1 py-0.5 font-semibold text-white">BANNED</span>
		{/if}
	</div>
</div>
