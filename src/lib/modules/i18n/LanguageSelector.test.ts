import { createI18nStore, currentLanguage } from "$lib/i18n/i18n.store";
import fetchMockVitest from "@fetch-mock/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { get } from "svelte/store";
import LanguageSelector from "./LanguageSelector.svelte";

describe("LanguageSelector", () => {
  beforeEach(() => {
    fetchMockVitest.mockGlobal();
    fetchMockVitest.get("/api/i18n/translations", {
      elements: []
    });
  });
  it("should render correctly", () => {
    const { getByText } = render(LanguageSelector, { context: new Map([["i18n", createI18nStore()]]) });
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
