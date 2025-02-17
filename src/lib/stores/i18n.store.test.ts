import { describe, expect, it } from "vitest";
import { addTranslations, createI18nStore, t } from "./i18n.store";

describe.skip("I18n", () => {
	it("can translate a translatable", () => {
		createI18nStore({ lng: "de" });
		addTranslations("de", { "hello": "hallo" });
		t.subscribe(($t) => {
			expect($t("hello")).toEqual("hallo");
		});
	});
});
