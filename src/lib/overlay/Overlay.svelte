<svelte:options customElement="sui-overlay" />

<script lang="ts">
	import { computePosition, flip, offset, shift, type Placement } from "@floating-ui/dom";
	import { onMount } from "svelte";

	let overlay: HTMLSpanElement;
	let trigger: HTMLElement;
	let isOpen = false;

	let { placement }: { placement?: Placement } = $props();

	export function openOverlay(options: { trigger: HTMLElement; placement?: Placement }) {
		if (!options.trigger) throw new Error("trigger is required");
		if (!options.placement) options.placement = placement || "bottom";
		trigger = options.trigger;
		computePosition(trigger, overlay, {
			placement: options.placement,
			middleware: [flip({ padding: 2 }), shift({ padding: 2 }), offset(2)]
		}).then(({ x, y }) => {
			Object.assign(overlay.style, {
				left: `${x}px`,
				top: `${y}px`
			});
		});
		overlay.classList.remove("hidden");
		isOpen = true;
	}

	export function closeOverlay() {
		overlay.classList.add("hidden");
		isOpen = false;
	}

	onMount(() => {
		const outsideClickHandler = (event: MouseEvent) => {
			if (isOpen) {
				if (!overlay.contains(event.target as Node) && !trigger.contains(event.target as Node))
					closeOverlay();
			}
		};
		document.addEventListener("click", outsideClickHandler);
	});
</script>

<button onclick={(e) => openOverlay({ trigger: e.target as HTMLElement })}>
	<slot name="trigger"></slot>
</button>
<span class="hidden absolute z-50" bind:this={overlay}>
	<slot name="overlay"></slot>
</span>
