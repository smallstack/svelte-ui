<script>
	import ComponentHeader from "$lib/docs/ComponentHeader.svelte";
	import ComponentSubHeader from "$lib/docs/ComponentSubHeader.svelte";
</script>

<ComponentHeader
	title="Svelte UI"
	description="Tiny library for Svelte 5 and DaisyUI, published as multi entry ESM module. 
"
/>

<ComponentSubHeader title="Dependencies"></ComponentSubHeader>
This UI library is based on
<div class="flex flex-col gap-2 p-4">
	<li>Svelte 5 Beta</li>
	<li>DaisyUI 4.x</li>
	<li>Free Fontawesome Icons</li>
	<li>@floating-ui/dom</li>
	<li>date-fns</li>
	<li>i18next</li>
</div>

<ComponentSubHeader title="Purpose"></ComponentSubHeader>
We built this library because at the time of creation there were no libraries that supported Svelte 5,
DaisyUI as well as all needed Forms Inputs.

<!-- <ComponentSubHeader title="Web Components"></ComponentSubHeader>
Since this library is also used in legacy stacks (Angular/React projects) all components are also available
as web components. -->

<ComponentSubHeader title="License"></ComponentSubHeader>
MIT