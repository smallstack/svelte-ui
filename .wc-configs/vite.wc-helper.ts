import { svelte } from "@sveltejs/vite-plugin-svelte";
import { readFileSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const file = fileURLToPath(new URL("../package.json", import.meta.url));
const json = readFileSync(file, "utf8");
const pkg = JSON.parse(json);

export function wcViteConfig(fileName: string, moduleName: string) {
	return defineConfig({
		build: {
			lib: {
				entry: resolve(__dirname, "../dist/" + fileName + ".js"),
				name: moduleName,
				fileName,
				formats: ["iife"]
			},
			outDir: "static/cdn/web-components/" + pkg.version + "/" + fileName
		},
		plugins: [svelte()]
	});
}
