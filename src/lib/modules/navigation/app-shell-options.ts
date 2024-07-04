import type { Navigation } from "./navigation.js";

export const APP_SHELL_OPTIONS = "appShellOptions";
export const APP_SHELL_STATS = "appShellStats";

interface AppShellGlobalOptions {
	logoUrl?: string;
	/** The title will be shown next or below the logo */
	title?: string;
	/** defaults to primary color */
	bgColor?: string;
	/** defaults to primary-text color */
	textColor?: string;
	/** the navigation entries to show */
	navigation?: Navigation;
}

export interface AppShellSidebarOptions extends AppShellGlobalOptions {
	width?: number;
	show?: boolean | string[];
}

export interface AppShellNavbarOptions extends AppShellGlobalOptions {
	show?: boolean | string[];
	/** show/hide the navigation entries inside the top navbar */
	showNavigation?: boolean;
	height?: number;
}

export interface AppShellAppHeaderOptions extends AppShellGlobalOptions {
	show?: boolean | string[];
	height?: number;
	showMenuTriggerRight?: boolean | string[];
	showMenuTriggerLeft?: boolean | string[];
}

export interface AppShellTabBarOptions extends AppShellGlobalOptions {
	show?: boolean | string[];
	height?: number;
	/** show the text below the icons */
	showText?: boolean;
	showSuperBtn?: boolean;
}

export interface AppShellOptions extends AppShellGlobalOptions {
	tabBar?: AppShellTabBarOptions;
	sidebar?: AppShellSidebarOptions;
	navbar?: AppShellNavbarOptions;
	appHeader?: AppShellAppHeaderOptions;
}

export interface AppShellStats {
	width: number;
	height: number;
	mainContentHeight: number;
	mainContentWidth: number;
}

export function getComputedOptions<T>(options: AppShellOptions, navigationProp: string): T {
	if (!(navigationProp in options)) throw new Error("property " + navigationProp + " not found");
	const base: T = options[navigationProp];

	function useGlobalValue(propName: string): void {
		if (base[propName] === undefined && base[propName] !== null) base[propName] = options[propName];
	}
	useGlobalValue("logoUrl");
	useGlobalValue("title");
	useGlobalValue("bgColor");
	useGlobalValue("textColor");
	useGlobalValue("navigation");

	return base;
}
