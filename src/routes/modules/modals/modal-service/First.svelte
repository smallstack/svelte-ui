<script lang="ts">
	import { modalService } from "$lib";
	import Second from "./Second.svelte";

	let chosenColor: string = $state();

	function openAnotherModal() {
		modalService.openModal(Second, {
			title: "Choose the right color",
			closingPropName: "selectColor",
			closeDialog: (color) => (chosenColor = color)
		});
	}
</script>

<div>
	I am a standard svelte component that does not need to know that it is being opened inside a
	modal.
</div>
<button class="btn btn-primary mt-4" onclick={openAnotherModal}>Open another Modal</button>

{#if chosenColor}
	<div class="pt-4">
		Your color choice: {chosenColor}
	</div>
{/if}
