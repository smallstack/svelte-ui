import { afterNavigate } from "$app/navigation";
import type { AfterNavigate } from "@sveltejs/kit";

export function isActiveLink(node: HTMLAnchorElement, activeClass: string) {
	afterNavigate((navigation: AfterNavigate) => {
		if (node.href) {
			if (new URL(node.href).pathname === navigation.to.url.pathname)
				node.classList.add(activeClass);
			else node.classList.remove(activeClass);
		}
	});
}
