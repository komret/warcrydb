import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-cloudflare';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter({
				routes: {
					include: ['/', '/faq', '/errata', '/about', '/shared/*', '/card/*']
				}
			})
		})
	]
});
