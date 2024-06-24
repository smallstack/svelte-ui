import type { PlaywrightTestConfig } from "@playwright/test";

const ciConfig: PlaywrightTestConfig = {
	name: "SvelteUI",
	webServer: {
		command: "npm run build && npm run preview",
		port: 4173
	},
	testDir: "src",
	testMatch: /(.+\.)?playwright\.ts/,
	use: {
		baseURL: "http://localhost:4173"
	}
};

const localConfig: PlaywrightTestConfig = {
	name: "SvelteUI Local",
	webServer: {
		command: "npm run dev",
		port: 5173,
		reuseExistingServer: true
	},
	testDir: "src",
	testMatch: /(.+\.)?playwright\.ts/,
	use: {
		baseURL: "http://localhost:5173"
	}
};

if (process.env.CI) {
	console.log("Running in CI...");
} else {
	console.log("Running locally...");
}

export default process.env.CI ? ciConfig : localConfig;
