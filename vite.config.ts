import { codecovSvelteKitPlugin } from "@codecov/sveltekit-plugin";
import { sveltekit } from "@sveltejs/kit/vite";
import { svelteTesting } from '@testing-library/svelte/vite';
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";


const file = fileURLToPath(new URL("package.json", import.meta.url));
const json = readFileSync(file, "utf8");
const pkg = JSON.parse(json);

export default defineConfig({
	plugins: [
		sveltekit(),
		svelteTesting(),
		codecovSvelteKitPlugin({
			enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
			bundleName: "@smallstack/svelte-ui",
			uploadToken: process.env.CODECOV_TOKEN
		})
	],
	define: {
		pkg: pkg
	},
	test: {
		globals: true,
		environment: "jsdom",
		include: ["src/**/*.test.ts"],
		reporters: ["default", "junit"],
		outputFile: { junit: "test-results/junit.xml" },
		coverage: {
			provider: "v8",
			include: ["src/lib/**"],
			exclude: ["node_modules/**"],
			reporter: ["lcov", "clover", "text-summary"],
			reportsDirectory: "coverage",
			thresholds: {
				statements: 16,
				branches: 31,
				functions: 9,
				lines: 16
			}
		}
	}
});
