<script lang="ts">
	type Props = {
		children: any;
	};

	let { children }: Props = $props();
</script>

<div class="mb-4 rounded-lg bg-gray-800 p-4 shadow-xl">
	{@render children()}
</div>
