<script lang="ts">
	import type { JSONSchema7 } from "json-schema";
	import { setContext } from "svelte";
	import { FormService } from "./form.service.svelte";

	let {
		children,
		schema,
		value = $bindable()
	}: { children: any; schema?: JSONSchema7; value?: any } = $props();

	const formService = new FormService();
	if (value) {
		formService.data = value;
	}
    $effect(() => {
        value = formService.data;
    });
	setContext("formService", formService);
</script>

{@render children()}
