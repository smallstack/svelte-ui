import type { InitOptions } from "i18next";
import i18nNext from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { getContext, setContext } from "svelte";
import type { Readable } from "svelte/store";
import { derived, get, writable } from "svelte/store";

export const getI18nStore = (i18nNextOptions?: Partial<InitOptions>) => {
	i18nNext.use(LanguageDetector).init({
		fallbackLng: "en",
		detection: {
			order: ["localStorage", "navigator"],
			caches: ["localStorage"]
		},
		interpolation: {
			escapeValue: false // not needed for svelte as it escapes by default
		},
		...i18nNextOptions
	});
	return derived([currentLanguage], () => i18nNext);
};

export function initI18n(i18nNextOptions?: Partial<InitOptions>) {
	setContext("i18n", getI18nStore(i18nNextOptions));
}

export function getI18n(): Readable<typeof i18nNext> {
	const i18nFromContext = getContext<Readable<typeof i18nNext>>("i18n");
	if (!i18nFromContext)
		throw new Error("i18n store not found on context, did you forget to call initI18n?");
	return i18nFromContext;
}

export type InlineTranslation = {
	[locale: string]: string;
};

export const currentLanguage = writable("de");
// i18nNext.on("languageChanged", (lng) => {
// 	currentLanguage.set(lng);
// });

export function translateInlineTranslation(
	translation: InlineTranslation | string,
	options: { language?: string; useFallback?: boolean } = { useFallback: true }
): string {
	if (!translation) return undefined;
	if (typeof translation === "string") return translation;
	if (!options.language) options.language = get(currentLanguage);
	const t = translation[options.language];
	if (t) return t;
	if (options.useFallback !== true) return "";
	return Object.values(translation)[0];
}

/** translates inline translations */
export const it = derived(currentLanguage, () => translateInlineTranslation);

/** based on the input either inline translations or keys are getting translated */
export const t = derived(currentLanguage, (currentLanguage: string) => {
	return (key: string | InlineTranslation, options?: Record<string, unknown>) => {
		if (typeof key === "string") return i18nNext.t(key, options);
		return translateInlineTranslation(key, { language: currentLanguage });
	};
});
