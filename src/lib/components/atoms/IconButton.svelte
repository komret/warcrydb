<script lang="ts">
	type Props = {
		icon?: string; // For text icons like '+', '-', '×', '?'
		svg?: string; // For SVG content
		onClick: () => void;
		disabled?: boolean;
		size?: 'sm' | 'lg';
		variant?: 'primary' | 'secondary' | 'danger';
		title: string;
	};

	let {
		icon,
		svg,
		onClick,
		disabled = false,
		size = 'lg',
		variant = 'primary',
		title
	}: Props = $props();

	const sizeClasses = {
		sm: 'h-5 w-5 text-lg',
		lg: 'h-7 w-7 text-xl'
	};

	const variantClasses = $derived(() => ({
		primary: disabled
			? 'cursor-default text-gray-400'
			: 'cursor-pointer text-blue-300 hover:text-blue-400',
		secondary: disabled
			? 'cursor-default text-gray-400'
			: 'cursor-pointer text-gray-400 hover:text-white',
		danger: disabled
			? 'cursor-default text-gray-400'
			: 'cursor-pointer text-red-300 hover:text-red-400'
	}));

	const baseClasses =
		'flex items-center justify-center focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50';
</script>

<button
	onclick={onClick}
	{disabled}
	{title}
	aria-label={title}
	class="{baseClasses} {sizeClasses[size]} {variantClasses()[variant]}"
>
	{#if icon}
		{icon}
	{:else if svg}
		{@html svg}
	{/if}
</button>
