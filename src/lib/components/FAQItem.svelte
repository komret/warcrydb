<script lang="ts">
	import type { FAQ } from '$lib/data/faq';
	import { highlightSearchTerms } from '$lib/utils/highlightSearchTerms';

	type Props = {
		item: FAQ;
		searchQuery: string;
	};

	let { item, searchQuery }: Props = $props();
</script>

<article class="rounded-lg border border-gray-700 bg-gray-800 p-4">
	<h2 class="mb-2 text-base text-gray-300">
		{@html highlightSearchTerms(item.question, searchQuery)}
	</h2>
	<div class="relative">
		<p class="pr-8 text-base text-gray-400">
			{@html highlightSearchTerms(item.answer, searchQuery)}
		</p>
		<a
			href={item.source}
			target="_blank"
			rel="noopener noreferrer"
			class="absolute right-0 bottom-0 text-gray-500 hover:text-blue-400"
			aria-label="View source"
		>
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
				/>
			</svg>
		</a>
	</div>
</article>
