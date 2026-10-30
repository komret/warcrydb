<script lang="ts">
	import type { FAQ } from '#lib/data/faq.ts';
	import { highlightSearchTerms } from '#lib/utils/highlightSearchTerms.ts';
	import { onMount } from 'svelte';
	import IconButton from './atoms/IconButton.svelte';
	import externalLinkIcon from '../assets/icons/external-link.svg?raw';

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
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- item.question is trusted content from the FAQ database, not user input -->
		{@html highlightSearchTerms(item.question, searchQuery)}
	</h2>
	<div class="flex items-end justify-between gap-4">
		<p bind:this={answerElement} class=" text-base text-gray-400">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- item.answer is trusted content from the FAQ database, not user input -->
			{@html highlightSearchTerms(item.answer, searchQuery)}
		</p>
		<IconButton
			svg={externalLinkIcon}
			variant="secondary"
			size="sm"
			title="View source"
			onClick={() => window.open(item.source, '_blank', 'noopener,noreferrer')}
		/>
	</div>
</article>
