<script lang="ts">
	import type { Snippet } from "svelte";
	import { modalService, type ModalOptions } from "./modal.service.svelte";

	let {
		children,
		isOpen = $bindable(false),
		options
	}: { children: Snippet; isOpen?: boolean; options?: ModalOptions } = $props();

	let alreadyOpen = $state(false);
	let enhancedOptions = {
		...options,
		closeDialog: () => {
			if (options?.closeDialog) options.closeDialog();
			isOpen = false;
			alreadyOpen = false;
		}
	};

	$effect(() => {
		if (isOpen && !alreadyOpen) {
			modalService.openModal(children, enhancedOptions);
			alreadyOpen = true;
		}
	});
</script>
