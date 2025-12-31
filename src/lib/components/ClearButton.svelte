<script lang="ts">
	import IconButton from './IconButton.svelte';

	type Props = {
		onClick: () => void;
	};

	let { onClick }: Props = $props();
</script>

<div class="absolute top-1/2 right-2 -translate-y-1/2">
	<IconButton svg="×" variant="neutral" size="lg" title="Clear" {onClick} />
</div>
