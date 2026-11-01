<script lang="ts">
	import type { FAQ } from '#lib/data/faq.ts';
	import { highlightSearchTerms } from '#lib/utils/highlightSearchTerms.ts';
	import IconButton from './atoms/IconButton.svelte';
	import externalLinkIcon from '../assets/icons/external-link.svg?raw';

	type Props = {
		item: FAQ;
		searchQuery: string;
		onCardClick: (cardId: string) => void;
	};

	let { item, searchQuery, onCardClick }: Props = $props();

	// Delegated so it keeps working after {@html} re-renders the card name spans
	const handleClick = (e: MouseEvent) => {
		const span = (e.target as HTMLElement).closest('span[class^="card-id-"]');
		if (!span) return;
		// Extract the card ID by removing the "card-id-" prefix
		const cardId = span.className.replace('card-id-', '');
		if (cardId) {
			e.stopPropagation();
			onCardClick(cardId);
		}
	};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<article class="rounded-lg border border-gray-700 bg-gray-800 p-4" onclick={handleClick}>
	<h2 class="mb-2 text-base text-gray-200">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- item.question is trusted content from the FAQ database, not user input -->
		{@html highlightSearchTerms(item.question, searchQuery)}
	</h2>
	<div class="flex items-end justify-between gap-4">
		<p class=" text-base text-gray-400">
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
