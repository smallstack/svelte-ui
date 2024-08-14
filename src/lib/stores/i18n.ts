import type { i18n as i18nNext } from "i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { getContext, setContext } from "svelte";
import { createI18nStore } from "svelte-i18next";
import type { Readable } from "svelte/store";

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
	}
});

const getI18nStore = () => createI18nStore(i18next);

export function initI18n() {
	setContext("i18n", getI18nStore());
}

export function getI18n() {
	return getContext<Readable<i18nNext>>("i18n");
}
