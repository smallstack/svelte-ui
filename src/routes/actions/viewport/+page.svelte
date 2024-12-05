<script>
	import ComponentCode from "$lib/docs/ComponentCode.svelte";
	import ComponentPageHeader from "$lib/docs/ComponentPageHeader.svelte";
	import { InViewport } from "$lib/modules/layout";

	function inViewportEvent(event) {
		console.log("InViewport Event: ", event.detail);
	}
</script>

<ComponentPageHeader
	title="In Viewport"
	description="The component itself is invisible. But whenever the component scrolls into viewport, it dispatches an event. This can be used to trigger animations or other actions like an infinite scroll concept."
></ComponentPageHeader>

<ComponentPageHeader title="Usage" level="2"></ComponentPageHeader>
<ComponentCode
	>{`<InViewport on:event={(event) => {
        if (event === true) {
            console.log("InViewport Event: Element is in the viewport");
        } else {
            console.log("InViewport Event: Element is not in the viewport");
        }
    }}>
</InViewport>`}
</ComponentCode>

<ComponentPageHeader title="Demo" level="2"></ComponentPageHeader>
The component is attached at the bottom of the page. Please open the javascript console and scroll down
to see the log messages.

<br />
<div class="text-center text-8xl mt-12 pt-8">
	<i class="fa-solid fa-arrow-down fa-bounce"></i>
	<div style="margin-top: 1500px"></div>
	<div class="text-lg">The invisible component is located between those arrows.</div>
	<i class="fa-solid fa-arrows-down-to-line"></i>
	<InViewport on:event={inViewportEvent}></InViewport>
	<i class="fa-solid fa-arrows-up-to-line"></i>
</div>
