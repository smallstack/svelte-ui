<script lang="ts">
	import { asyncHandler } from "../utils/async-handler";
	import { modalService, type ModalButton } from "./modal.service.svelte";

	let { message, buttons }: { message: string; buttons: ModalButton[] } = $props();
</script>

<p>{message}</p>

<div class="dialog-actions">
	{#each buttons as button}
		<button
			class="btn btn-{button.color}"
			use:asyncHandler={() => button.onClick({ closeModal: () => modalService.closeModal() })}
			>{button.text}</button
		>
	{/each}
</div>
