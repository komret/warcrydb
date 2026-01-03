<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'secondary' | 'success' | 'transparent';
	type Size = 'sm' | 'md' | 'lg';

	type Props = {
		variant?: Variant;
		size?: Size;
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset';
		children: Snippet;
	} & Record<string, unknown>;

	let {
		variant = 'primary',
		size = 'md',
		disabled = false,
		type = 'button',
		children,
		class: className = '',
		...rest
	}: Props = $props();

	let buttonElement: HTMLButtonElement | undefined = $state();

	// Focus management for accessibility
	onMount(() => {
		if (buttonElement && !disabled) {
			// Ensure button is focusable
			buttonElement.tabIndex = 0;
		}
	});

	// Base classes
	let baseClasses = $derived(
		'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed'
	);

	// Variant classes
	let variantClasses = $derived.by(() => {
		switch (variant) {
			case 'primary':
				return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
			case 'secondary':
				return 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500';
			case 'success':
				return 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500';
			case 'transparent':
				return 'bg-transparent text-white hover:text-blue-400 focus:ring-blue-500';
			default:
				return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
		}
	});

	// Size classes
	let sizeClasses = $derived.by(() => {
		switch (size) {
			case 'sm':
				return 'px-3 py-1.5 text-sm';
			case 'md':
				return 'px-4 py-2 text-sm';
			case 'lg':
				return 'px-6 py-3 text-base';
			default:
				return 'px-4 py-2 text-sm';
		}
	});

	let combinedClasses = $derived(`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`);
</script>

<button bind:this={buttonElement} {type} {disabled} class={combinedClasses} {...rest}>
	{@render children()}
</button>
