import { createI18nStore, currentLanguage } from "$lib/stores/i18n.store";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { get } from "svelte/store";
import { describe, expect, it } from "vitest";
import LanguageSelector from "./LanguageSelector.svelte";

describe("LanguageSelector", () => {
	it("should render correctly", () => {
		const { getByText } = render(LanguageSelector, {
			context: new Map([["i18n", createI18nStore()]])
		});
		expect(getByText("i18n.language")).toBeInTheDocument();
	});

	it("should change language on select change", async () => {
		render(LanguageSelector, { context: new Map([["i18n", createI18nStore()]]) });
		const select = screen.getByTestId("language-selector") as HTMLSelectElement;
		await fireEvent.change(select, { target: { value: "de" } });
		expect(get(currentLanguage)).toBe("de");
		await fireEvent.change(select, { target: { value: "en" } });
		expect(get(currentLanguage)).toBe("en");
	});
});
