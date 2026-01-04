<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'light' | 'dark';

	type Props = {
		children: Snippet;
		variant?: Variant;
		class?: string;
		disabled?: boolean;
		title?: string;
		onclick?: () => void;
	};

	let {
		children,
		variant = 'light',
		class: className = '',
		disabled = false,
		title,
		onclick
	}: Props = $props();

	let baseClasses = $derived(
		'flex items-center justify-center px-3 py-2 text-sm font-medium transition-colors border-l border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
	);

	let variantClasses = $derived.by(() => {
		switch (variant) {
			case 'dark':
				return 'bg-gray-600 text-white hover:bg-gray-500 border-gray-500';
			case 'light':
			default:
				return 'bg-white text-gray-900 hover:bg-gray-50';
		}
	});

	let combinedClasses = $derived(`${baseClasses} ${variantClasses} ${className}`);
</script>

<button {disabled} {title} {onclick} class={combinedClasses}>
	{@render children()}
</button>
