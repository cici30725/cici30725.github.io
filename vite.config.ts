import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import pluginYaml from '@rollup/plugin-yaml';

export default defineConfig({
	plugins: [sveltekit(), pluginYaml() as any]
});
