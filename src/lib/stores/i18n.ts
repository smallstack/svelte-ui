import type { i18n as i18nNext, InitOptions } from "i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { getContext, setContext } from "svelte";
import { createI18nStore } from "svelte-i18next";
import type { Readable } from "svelte/store";

const getI18nStore = (i18nNextOptions?: Partial<InitOptions>) => {
	i18next.use(LanguageDetector).init({
		fallbackLng: "en",
		detection: {
			order: ["localStorage", "navigator"],
			caches: ["localStorage"]
		},
		resources: {
			de: {
				translation: {
					navigation: {
						about: "Über"
					}
				}
			},
			en: {
				translation: {
					navigation: {
						about: "About",
						gettingStarted: "Getting Started"
					}
				}
			}
		},
		interpolation: {
			escapeValue: false // not needed for svelte as it escapes by default
		},
		...i18nNextOptions
	});
	return createI18nStore(i18next);
};

export function initI18n(i18nNextOptions?: Partial<InitOptions>) {
	setContext("i18n", getI18nStore(i18nNextOptions));
}

export function getI18n() {
	return getContext<Readable<i18nNext>>("i18n");
}
