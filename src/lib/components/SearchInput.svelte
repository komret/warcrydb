<script lang="ts">
	type Props = {
		value: string;
		onInput: (value: string) => void;
		placeholder?: string;
	};

	let { value = $bindable(''), placeholder = 'Search...' }: Props = $props();
</script>

<div class="relative">
	<input
		type="text"
		bind:value
		{placeholder}
		class="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
	/>
	{#if value}
		<button
			onclick={() => (value = '')}
			class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
			aria-label="Clear search"
		>
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	{/if}
</div>
