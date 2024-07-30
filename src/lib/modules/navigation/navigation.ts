import type { ActiveLinkOptions } from "./active-link.svelte.js";

export interface NavigationEntry {
	// type: "link" | "divider";
	text?: string;
	link?: string;
	clickFn?: () => void;
	icon?: string;
	entries?: NavigationEntry[];
	/** If set, then this navigation entry will only be shown if the current user has the given permission. If an array is provided, one of these permissions is needed only (OR). */
	requiredPermission?: string | string[];
	activeLinkOptions?: ActiveLinkOptions;
}

export interface Navigation {
	entries: NavigationEntry[];
}
