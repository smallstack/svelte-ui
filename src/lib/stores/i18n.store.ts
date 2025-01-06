import type { InitOptions } from "i18next";
import i18nNext from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { getContext, setContext } from "svelte";
import type { Readable } from "svelte/store";
import { derived, get, writable } from "svelte/store";

const createI18nStore = (i18nNextOptions?: Partial<InitOptions>) => {
	i18nNext.use(LanguageDetector).init({
		fallbackLng: "en",
		detection: {
			order: ["localStorage", "navigator"],
			caches: ["localStorage"]
		},
		interpolation: {
			escapeValue: false // not needed for svelte as it escapes by default
		},
		defaultNS: "translation",
		...i18nNextOptions
	});
	return derived([currentLanguage], () => i18nNext);
};

export function initI18n(i18nNextOptions?: Partial<InitOptions>) {
	setContext("i18n", createI18nStore(i18nNextOptions));
}

export function addTranslations(locale: string, translations: Record<string, unknown>) {
	i18nNext.addResourceBundle(locale, "translation", translations, true, true);
	translationsUpdated.set(true);
}

export async function addTranslationsFromUrl(url: string) {
	// load translations async
	await fetch(url).then(async (response) => {
		const translations = await response.json();
		for (const translation of translations.elements) {
			const keyValueMap = translation.translations.reduce(
				(acc, curr) => {
					acc[curr.key] = curr.value;
					return acc;
				},
				{} as Record<string, string>
			);
			i18nNext.addResourceBundle(translation.language, "translation", keyValueMap, true, true);
		}
		translationsUpdated.set(true);
	});
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
i18nNext.on("languageChanged", (lng) => {
	const formattedLanguage = lng.split("-")[0];
	currentLanguage.set(formattedLanguage);
});
export const availableLanguages = writable(["de"]);
export const translationsUpdated = writable(undefined);

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

export function isInlineTranslation(obj: InlineTranslation): obj is InlineTranslation {
	if (!(obj instanceof Object)) return false;
	for (const [key, value] of Object.entries(obj))
		if (typeof key !== "string" || typeof value !== "string") return false;
	return true;
}
