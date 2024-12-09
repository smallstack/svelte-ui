import { modalService } from "../modals/modal.service.svelte";

/** adds a loading state to the given component */
export function asyncHandler(node: HTMLElement, fn: () => Promise<unknown>) {
	node.addEventListener("click", async () => {
		const isBtn = node.classList.contains("btn");
		const hadRelativeBefore = node.classList.contains("relative");
		if (isBtn) node.classList.add("btn-disabled");
		if (!hadRelativeBefore) node.classList.add("relative");
		const outerDiv = document.createElement("div");
		outerDiv.classList.add(
			"absolute",
			"top-0",
			"left-0",
			"w-full",
			"h-full",
			"z-50",
			"m-auto",
			"flex",
			"justify-center",
			"items-center"
		);
		const loadingSpan = document.createElement("span");
		loadingSpan.classList.add("loading", "loading-bars");
		outerDiv.appendChild(loadingSpan);
		node.appendChild(outerDiv);
		try {
			await executeAsyncHandler(fn);
		} catch (e) {
			modalService.openSimpleModal({ title: "Error", message: e.message });
			throw e;
		} finally {
			if (isBtn) node.classList.remove("btn-disabled");
			if (!hadRelativeBefore) node.classList.remove("relative");
			loadingSpan.remove();
			outerDiv.remove();
		}
	});
}

async function executeAsyncHandler(fn: () => Promise<unknown>) {
	const result = await fn();
	if (result instanceof Response) {
		if (result.status === 200) {
			modalService.openSimpleModal({ title: "Success", message: "Operation successful" });
		} else {
			const message = await result.text();
			modalService.openSimpleModal({ title: "Error", message });
		}
	}
}
