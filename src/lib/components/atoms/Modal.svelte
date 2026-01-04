<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		show: boolean;
		title?: string;
		children?: Snippet;
		actions?: Snippet;
		size?: 'sm' | 'md' | 'lg' | 'xl';
		onClose?: () => void;
	};

	let { show, title, children, actions, size = 'md', onClose }: Props = $props();

	function handleBackdropClick(event: MouseEvent) {
		// Close modal when clicking on backdrop (outside the modal content)
		if (event.target === event.currentTarget && onClose) {
			onClose();
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && onClose) {
			onClose();
		}
	}

	function getSizeClasses(size: string): string {
		switch (size) {
			case 'sm':
				return 'max-w-sm';
			case 'lg':
				return 'max-w-lg';
			case 'xl':
				return 'max-w-xl';
			case 'md':
			default:
				return 'max-w-md';
		}
	}
</script>

{#if show}
	<div
		class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
		onclick={handleBackdropClick}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-labelledby={title ? 'modal-title' : undefined}
		tabindex="-1"
	>
		<div class="mx-4 w-full {getSizeClasses(size)} rounded-lg bg-gray-800 p-6 shadow-xl">
			{#if title}
				<h3 id="modal-title" class="mb-4 text-lg font-semibold text-white">{title}</h3>
			{/if}

			{#if children}
				<div class="mb-6">
					{@render children()}
				</div>
			{/if}

			{#if actions}
				<div class="flex justify-end gap-3">
					{@render actions()}
				</div>
			{/if}
		</div>
	</div>
{/if}
