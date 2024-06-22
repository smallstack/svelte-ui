import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'dist/table.js'),
			name: 'Table',
			fileName: 'table',
			formats: ['iife']
		},
		outDir: 'dist-js'
	},
	plugins: [svelte()]
});
