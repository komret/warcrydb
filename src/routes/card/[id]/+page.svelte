<script lang="ts">
	import { getCardImageFilename } from '#lib/utils/cardImage.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="flex justify-center">
	<img
		src="/cards/{getCardImageFilename(data.id)}"
		alt="Card {data.id}"
		class="max-w-full rounded-lg shadow-2xl"
	/>
</div>
