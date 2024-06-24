import { expect, test } from "@playwright/test";

test("home page has expected header text", async ({ page }) => {
	await page.goto("/");
	await expect(page.locator("body")).toContainText("Svelte 5 & DaisyUI Library");
});
