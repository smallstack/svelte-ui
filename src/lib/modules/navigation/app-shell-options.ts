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
	availablePermissions?: string[];
}

export interface AppShellStats {
	width: number;
	height: number;
	mainContentHeight: number;
	mainContentWidth: number;
}

export type hasPermissionFn = (permission: string) => boolean;

export function filterAuthorizedNavigation(
	navigation: Navigation,
	availablePermissions: string[]
): Navigation {
	function checkPermission(permission: string): boolean {
		if (
			availablePermissions === undefined ||
			availablePermissions === null ||
			availablePermissions.length === 0
		) {
			console.error(
				"AppShell: availablePermissions is not provided, but navigation entry needs permission. Ignoring permission check and not showing entry."
			);
			return false;
		}
		return availablePermissions.includes(permission);
	}

	const entries = navigation.entries.filter((entry) => {
		if (entry.requiredPermission === undefined) return true;
		if (typeof entry.requiredPermission === "string")
			return checkPermission(entry.requiredPermission);
		return entry.requiredPermission.some((perm) => checkPermission(perm));
	});

	// filter sub-entries of remaining entries
	for (const entry of entries) {
		if (entry.entries) {
			entry.entries = filterAuthorizedNavigation(
				{ entries: entry.entries },
				availablePermissions
			).entries;
		}
	}
	return { entries };
}

export function getComputedOptions<T>(options: AppShellOptions, navigationProp: string): T {
	if (!(navigationProp in options)) throw new Error("property " + navigationProp + " not found");
	const clonedOptions = JSON.parse(JSON.stringify(options));
	const base = clonedOptions[navigationProp];

	function useGlobalValue(propName: string): void {
		if (base[propName] === undefined && base[propName] !== null)
			base[propName] = clonedOptions[propName];
	}
	useGlobalValue("logoUrl");
	useGlobalValue("title");
	useGlobalValue("bgColor");
	useGlobalValue("textColor");
	useGlobalValue("navigation");

	// filter navigation entries based on permissions
	if (base.navigation) {
		base.navigation = filterAuthorizedNavigation(
			base.navigation,
			clonedOptions.availablePermissions
		);
	}

	return base;
}
