export interface NavigationEntry {
	// type: "link" | "divider";
	text?: string;
	link?: string;
	clickFn?: () => void;
	icon?: string;
	entries?: NavigationEntry[];
}

export interface Navigation {
	entries: NavigationEntry[];
}
