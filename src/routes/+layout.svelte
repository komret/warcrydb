<script lang="ts">
	import './layout.css';
	import logo from '$lib/assets/warcry-logo.png';
	import { page } from '$app/stores';

	let { children } = $props();

	// Determine current page from route
	const currentPage = $derived.by(() => {
		const path = $page.url.pathname;
		if (path === '/') return 'home';
		if (path === '/faq') return 'faq';
		if (path === '/errata') return 'errata';
		if (path === '/about') return 'about';
		if (path.startsWith('/shared')) return 'shared';
		return 'home';
	});

	// Determine page title from route
	const pageTitle = $derived.by(() => {
		switch (currentPage) {
			case 'home':
				return 'Warcry Deck Builder';
			case 'faq':
				return 'FAQ - Warcry Deck Builder';
			case 'errata':
				return 'Errata - Warcry Deck Builder';
			case 'about':
				return 'About - Warcry Deck Builder';
			case 'shared':
				return 'Shared Deck - Warcry Deck Builder';
			default:
				return 'Warcry Deck Builder';
		}
	});

	// Navigation menu state
	let showMenu = $state(false);
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-8">
		<header class="relative mb-4">
			<div class="mb-3 flex items-center justify-between">
				<a href="/" class="block">
					<img src={logo} alt="WarCry Logo" class="h-16" />
				</a>

				<!-- Hamburger Menu Button -->
				<button
					onclick={() => (showMenu = !showMenu)}
					class="rounded-lg p-2 hover:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					aria-label="Toggle menu"
					aria-expanded={showMenu}
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if showMenu}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{/if}
					</svg>
				</button>
			</div>

			<!-- Navigation Menu -->
			{#if showMenu}
				<nav
					class="absolute top-20 right-0 z-50 min-w-[200px] rounded-lg border border-gray-700 bg-gray-950 p-4 shadow-lg"
				>
					<div class="flex flex-col gap-2">
						<a
							href="/"
							class="rounded-lg px-4 py-2 transition-colors {currentPage === 'home'
								? 'bg-gray-700 font-semibold text-white'
								: 'text-gray-300 hover:bg-gray-700 hover:text-white'}"
						>
							Deck Builder
						</a>
						<a
							href="/faq"
							class="rounded-lg px-4 py-2 transition-colors {currentPage === 'faq'
								? 'bg-gray-700 font-semibold text-white'
								: 'text-gray-300 hover:bg-gray-700 hover:text-white'}"
						>
							FAQ
						</a>
						<a
							href="/errata"
							class="rounded-lg px-4 py-2 transition-colors {currentPage === 'errata'
								? 'bg-gray-700 font-semibold text-white'
								: 'text-gray-300 hover:bg-gray-700 hover:text-white'}"
						>
							Errata
						</a>
						<a
							href="/about"
							class="rounded-lg px-4 py-2 transition-colors {currentPage === 'about'
								? 'bg-gray-700 font-semibold text-white'
								: 'text-gray-300 hover:bg-gray-700 hover:text-white'}"
						>
							About
						</a>
					</div>
				</nav>
			{/if}
		</header>

		<!-- Menu Backdrop -->
		{#if showMenu}
			<div class="fixed inset-0 z-40" onclick={() => (showMenu = false)} aria-hidden="true"></div>
		{/if}

		{@render children()}
	</div>
</div>
