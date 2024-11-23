<script lang="ts">
	import { modalService } from "$lib/modules/modals/modal.service.svelte";
	import ComponentCode from "$lib/docs/ComponentCode.svelte";
	import ComponentHeader from "$lib/docs/ComponentHeader.svelte";
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import ComponentSubHeader from "$lib/docs/ComponentSubHeader.svelte";
	import First from "./First.svelte";
</script>

<ComponentHeader
	title="Modal Service"
	description="A service that allows you to open and close modals from anywhere in your application. It is being used by all modal components of Svelte UI."
></ComponentHeader>

<ComponentSubHeader
	title="Simple Singleton Service"
	description="The modal service can be called via a single exported instance."
></ComponentSubHeader>

<ComponentCode>
	{`import { modalService } from "@smallstack/svelte-ui/modals";`}

	{`modalService.open(MyComponent);`}
</ComponentCode>

<ComponentSubHeader
	title="Multi Modal Functionality"
	description="The modal service supports opening multiple modals at the same time. If a component is shown as modal which can open another modal, the current modal is put on a stack and the new one is being shown. A top bar navigation allows the user to navigate to the old one."
></ComponentSubHeader>
<ComponentCode>
	{`import { modalService } from "svelte-ui";`}

	{`modalService.open(ModalComponent, { props: { ... } });`}
</ComponentCode>

<ComponentPlayground>
	<button onclick={() => modalService.openModal(First, { title: "Hello World" })}>
		Open Modal
	</button>
</ComponentPlayground>

<ComponentSubHeader
	title="Playground"
	description="You can play around with the modal service in the playground below."
></ComponentSubHeader>
<iframe
	title="Simple Modal"
	src="https://svelte.dev/playground/e621d2a127494438859bde7a35226606?version=5.2.7"
	width="100%"
	height="800px"
></iframe>
