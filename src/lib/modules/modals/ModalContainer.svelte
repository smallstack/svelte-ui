<script lang="ts">
	import { onMount, type Component } from "svelte";
	import { fly } from "svelte/transition";
	import { asyncHandler } from "../utils";
	import { modalService, type ModalOptions } from "./modal.service.svelte";

	interface ModalStackItem {
		component: Component;
		options: ModalOptions;
	}

	let dialog: HTMLDialogElement;
	let modalStack: ModalStackItem[] = $state([]);
	let currentModal: ModalStackItem = $derived(modalStack[modalStack.length - 1]);
	let previousModal: ModalStackItem = $derived(modalStack[modalStack.length - 2]);
	let modalStackLength = $derived(modalStack.length);

	$effect(() => {
		if (currentModal) dialog.showModal();
		else dialog.close();
	});

	function setDialog(dialogElement: HTMLDialogElement) {
		dialog = dialogElement;
		dialog.onclose = (e) => {
			e.preventDefault();
			closeModal();
		};
	}

	export function showModal(component: Component, options: ModalOptions): void {
		if (options?.closingPropName) {
			if (!options.data) options.data = {};
			options.data[options.closingPropName] = (data: any) => {
				closeModal(data);
			};
		}
		modalStack.push({ component, options });
		dialog.showModal();
	}

	export function closeModal(data?: any): void {
		if (typeof currentModal?.options?.closeDialog === "function")
			currentModal.options.closeDialog(data);
		modalStack.pop();
	}

	onMount(() => {
		modalService.registerModalContainer({
			showModal,
			closeModal
		});
	});
</script>

<dialog class="modal modal-bottom sm:modal-middle" use:setDialog>
	<div class="modal-box">
		<div class="sui-dialog">
			<div class="sui-dialog-title flex flex-row gap-2 place-items-center">
				{#if previousModal}
					<div class="tooltip tooltip-right" data-tip="Zurück zu {previousModal.options.title}">
						<button class="btn btn-xs bg-transparent btn-square" onclick={() => modalStack.pop()}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								fill="currentColor"
								class="w-4 h-4"
								><path
									d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
								/></svg
							>
							<!-- {#if previousModal?.options.title}{previousModal.options.title}{/if} -->
						</button>
					</div>
				{/if}
				<div class="flex-grow">
					{#if currentModal?.options?.title}
						<div>{currentModal.options.title}</div>
					{/if}
				</div>
			</div>
			<div class="divider divide-gray-400 -ml-6 -mr-6 my-0"></div>
			<div class="sui-dialog-body">
				<!-- it does not work for e.g. widget tree json as modal -->
				<!-- svelte-ignore svelte_component_deprecated -->
				{#each modalStack as modal}
					<div
						class:hidden={modal !== currentModal}
						transition:fly={{ x: modalStackLength > 1 ? "100%" : "0" }}
					>
						<svelte:component this={modal.component} {...modal.options?.data} />
						{#if modal.options?.buttons}
							<div class="sui-dialog-actions">
								{#each modal.options.buttons as button}
									<button
										class="btn btn-{button.color}"
										use:asyncHandler={() =>
											button.onClick({ closeModal: () => modalService.closeModal() })}
										>{button.text}</button
									>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<style>
	:root:has(:is(.modal-open, .modal:target, .modal-toggle:checked + .modal, .modal[open])) {
		overflow: hidden;
		scrollbar-gutter: unset !important;
	}
</style>
