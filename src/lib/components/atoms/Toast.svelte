<script lang="ts">
	type Props = {
		message: string;
		show: boolean;
		duration?: number;
	};

	let { message, show, duration = 3000 }: Props = $props();

	$effect(() => {
		if (show) {
			const timer = setTimeout(() => {
				// This will be handled by the parent component
				// by setting show to false
			}, duration);
			return () => clearTimeout(timer);
		}
	});
</script>

{#if show}
	<div class="fixed top-4 right-4 z-50 transform transition-all duration-300 ease-in-out">
		<div class="rounded-lg bg-gray-600 px-4 py-3 text-white shadow-lg">
			<p class="text-sm font-medium">{message}</p>
		</div>
	</div>
{/if}
