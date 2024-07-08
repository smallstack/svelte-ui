import { browser } from "$app/environment";
import { beforeNavigate } from "$app/navigation";
import type { BeforeNavigate } from "@sveltejs/kit";

export function isActiveLink(node: HTMLAnchorElement, activeClass: string) {
	function checkHref(pathname: string) {
		if (node.href) {
			if (new URL(node.href).pathname === pathname) node.classList.add(activeClass);
			else node.classList.remove(activeClass);
		}
	}
	beforeNavigate((navigation: BeforeNavigate) => {
		checkHref(navigation.to.url.pathname);
	});
	if (browser) checkHref(location.pathname);
}
