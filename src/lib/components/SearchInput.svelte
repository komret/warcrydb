<script lang="ts">
	import ClearButton from './atoms/ClearButton.svelte';
	type Props = {
		value: string;
		label: string;
	};

	let { value = $bindable(''), label }: Props = $props();

	let inputElement: HTMLInputElement | undefined = $state();

	const insertCharacter = (char: string) => {
		if (inputElement) {
			const start = inputElement.selectionStart ?? value.length;
			const end = inputElement.selectionEnd ?? value.length;
			value = value.slice(0, start) + char + value.slice(end);
			// Set cursor position after inserted character
			setTimeout(() => {
				if (inputElement) {
					const newPos = start + char.length;
					inputElement.setSelectionRange(newPos, newPos);
					inputElement.focus();
				}
			}, 0);
		} else {
			value += char;
		}
	};
</script>

<div class="space-y-2">
	<div class="flex items-center justify-between">
		<span class="text-sm font-medium text-white">{label}</span>
		<div class="flex items-center gap-1">
			<button
				type="button"
				onclick={() => insertCharacter('|')}
				class="flex h-5 w-5 items-center justify-center rounded border border-gray-600 bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				aria-label="Insert OR operator"
				title="OR operator"
			>
				|
			</button>
			<button
				type="button"
				onclick={() => insertCharacter('&')}
				class="flex h-5 w-5 items-center justify-center rounded border border-gray-600 bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				aria-label="Insert AND operator"
				title="AND operator"
			>
				&
			</button>
		</div>
	</div>
	<div class="relative">
		<input
			bind:this={inputElement}
			type="text"
			bind:value
			class="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>
		{#if value}
			<ClearButton onClick={() => (value = '')} />
		{/if}
	</div>
</div>
