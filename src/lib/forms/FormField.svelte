<script lang="ts">
	import { getContext } from "svelte";
	import type { FormService } from "./form.service.svelte.js";

	const { path } = $props<{ path: string }>();

	const formService: FormService = getContext("formService");

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		formService.updateDataForPath(path, target.value);
	}
</script>

<input
	type="text"
	placeholder="Name"
	class="input input-bordered m-2"
	oninput={handleInput}
	value={formService.getValueForPath(path)}
/>
