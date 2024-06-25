import { expect, test } from "@playwright/test";

test("home page has expected header text", async ({ page }) => {
	await page.goto("/");
	await expect(page.locator("body")).toContainText("Svelte UI");
	await expect(page.locator("body")).toContainText("Tiny library for Svelte 5 and DaisyUI, published as multi entry ESM module and as web components.");
});
