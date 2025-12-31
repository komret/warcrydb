<script lang="ts">
	import type { FAQ } from '$lib/data/faq';
	import { highlightSearchTerms } from '$lib/utils/highlightSearchTerms';
	import { onMount } from 'svelte';
	import IconButton from './IconButton.svelte';

	type Props = {
		item: FAQ;
		searchQuery: string;
		onCardClick: (cardId: string) => void;
	};

	let { item, searchQuery, onCardClick }: Props = $props();

	let questionElement: HTMLElement;
	let answerElement: HTMLElement;

	onMount(() => {
		// Add click handlers to all card name spans
		const addClickHandlers = (element: HTMLElement) => {
			const spans = element.querySelectorAll('span[class^="card-id-"]');
			spans.forEach((span) => {
				const fullClass = span.className;
				// Extract the card ID by removing the "card-id-" prefix
				const cardId = fullClass.replace('card-id-', '');
				if (cardId) {
					span.classList.add(
						'cursor-pointer',
						'text-blue-400',
						'hover:text-blue-300',
						'transition-colors'
					);
					span.addEventListener('click', (e) => {
						e.stopPropagation();
						onCardClick(cardId);
					});
				}
			});
		};

		if (questionElement) addClickHandlers(questionElement);
		if (answerElement) addClickHandlers(answerElement);
	});
</script>

<article class="rounded-lg border border-gray-700 bg-gray-800 p-4">
	<h2 bind:this={questionElement} class="mb-2 text-base text-gray-200">
		{@html highlightSearchTerms(item.question, searchQuery)}
	</h2>
	<div class="flex items-end justify-between gap-4">
		<p bind:this={answerElement} class=" text-base text-gray-400">
			{@html highlightSearchTerms(item.answer, searchQuery)}
		</p>
		<IconButton
			svg="<svg class='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'/></svg>"
			variant="neutral"
			size="sm"
			title="View source"
			onClick={() => window.open(item.source, '_blank', 'noopener,noreferrer')}
		/>
	</div>
</article>
