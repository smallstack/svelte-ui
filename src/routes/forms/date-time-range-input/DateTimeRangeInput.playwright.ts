import { expect, test } from "@playwright/test";

test.describe("DateTimeRangeInput", () => {
	test("shows initial values", async ({ page }) => {
		await page.goto("/forms/date-time-range-input");
		await page.getByRole("link", { name: "Date Time Range Input" }).click();

		// empty
		await expect(
			page
				.locator('[data-test="component-playground-Standard"]')
				.getByRole("textbox", { name: "von" })
		).toBeEmpty();
		await expect(
			page
				.locator('[data-test="component-playground-Standard"]')
				.getByRole("textbox", { name: "bis" })
		).toBeEmpty();

		// prefilled dates
		await page.goto("/forms/date-time-range-input");
		await expect(
			page
				.locator('[data-test="component-playground-With default values"]')
				.getByRole("textbox", { name: "von" })
		).toHaveValue("01.06.2023 08:00:00");
		await expect(
			page
				.locator('[data-test="component-playground-With default values"]')
				.getByRole("textbox", { name: "bis" })
		).toHaveValue("24.06.2024 11:20:00");
	});
});
