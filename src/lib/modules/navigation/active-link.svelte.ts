import { browser } from "$app/environment";
import { beforeNavigate } from "$app/navigation";
import type { BeforeNavigate } from "@sveltejs/kit";

export interface ActiveLinkOptions {
	activeClass: string;
	includeQueryParams?: boolean;
}

export function isActiveLink(node: HTMLAnchorElement, options: ActiveLinkOptions) {
	function checkHref(pathname: string) {
		if (node.href) {
			const basePathMatches = new URL(node.href).pathname === pathname;
			const queryParamsMatch = new URL(node.href).search === location.search;

			if (basePathMatches && (options.includeQueryParams ? queryParamsMatch : true)) {
				node.classList.add(options.activeClass);
			} else node.classList.remove(options.activeClass);
		}
	}
	beforeNavigate((navigation: BeforeNavigate) => {
		checkHref(navigation.to.url.pathname);
	});
	if (browser) checkHref(location.pathname);
}
