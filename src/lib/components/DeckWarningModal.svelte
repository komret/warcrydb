<script lang="ts">
	import Modal from './atoms/Modal.svelte';
	import Button from './atoms/Button.svelte';

	type Props = {
		show: boolean;
		onCancel: () => void;
		onProceed: () => void;
	};

	let { show, onCancel, onProceed }: Props = $props();
</script>

<Modal {show} title="Warning" onClose={onCancel}>
	{#snippet children()}
		<p class="text-gray-300">This action will override your current deck.</p>
	{/snippet}

	{#snippet actions()}
		<Button variant="secondary" onclick={onCancel}>Close</Button>
		<Button variant="primary" onclick={onProceed}>Proceed</Button>
	{/snippet}
</Modal>
