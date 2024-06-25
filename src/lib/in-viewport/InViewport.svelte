<script lang="ts">
	import { createEventDispatcher } from "svelte";

	let eventDispatcher = createEventDispatcher();

	let intersectionObserver: IntersectionObserver;

	function viewport(element: HTMLElement) {
		if (intersectionObserver) return;
		intersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					eventDispatcher("event", true);
				} else {
					eventDispatcher("event", false);
				}
			});
		});
		intersectionObserver.observe(element);

		return {
			destroy() {
				eventDispatcher("event", false);
				intersectionObserver.unobserve(element);
			}
		};
	}
</script>

<div use:viewport></div>
