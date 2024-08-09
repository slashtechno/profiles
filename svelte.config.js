import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// https://khromov.se/the-missing-guide-to-understanding-adapter-static-in-sveltekit/
			// npm run build && npx http-server ./build
			pages: 'build',
			assets: 'build',
			// From what I can tell, this needs to be set to wherever the web server directs 404s to
			fallback: "404.html",
			precompress: false,
			strict: true
		}),
		alias: {
            $lib: 'src/lib'
        }
	}
};

export default config;
