<script lang="ts">
	import type { Die } from '$lib/data/cards';

	type Props = {
		value: Die;
		size?: 'sm' | 'lg';
	};

	let { value, size = 'lg' }: Props = $props();

	const sizes = {
		lg: {
			container: 'h-8 w-8',
			dot: 'h-1.5 w-1.5',
			gapWide: 'gap-2',
			gapNarrow: 'gap-1',
			padding: 'p-1'
		},
		sm: {
			container: 'h-4 w-4',
			dot: 'h-1 w-1',
			gapWide: 'gap-1',
			gapNarrow: 'gap-0.5',
			padding: 'p-0.5'
		}
	};

	const s = $derived(sizes[size]);
</script>

{#if value === 1}
	<div class="grid {s.container} place-items-center">
		<div class="{s.dot} rounded-full bg-gray-400"></div>
	</div>
{:else if value === 2}
	<div class="grid {s.container} grid-cols-2 {s.gapWide} {s.padding}">
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div></div>
		<div></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
	</div>
{:else if value === 3}
	<div class="grid {s.container} grid-cols-3 {s.gapNarrow} {s.padding}">
		<div></div>
		<div></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div></div>
		<div></div>
	</div>
{:else if value === 4}
	<div class="grid {s.container} grid-cols-2 {s.gapWide} {s.padding}">
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
	</div>
{:else if value === 5}
	<div class="grid {s.container} grid-cols-3 {s.gapNarrow} {s.padding}">
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
	</div>
{:else if value === 6}
	<div class="grid {s.container} grid-cols-3 {s.gapNarrow} {s.padding}">
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
		<div></div>
		<div class="{s.dot} rounded-full bg-gray-400"></div>
	</div>
{/if}
