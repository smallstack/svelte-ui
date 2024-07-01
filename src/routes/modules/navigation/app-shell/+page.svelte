<script lang="ts">
	import ComponentCode from "$lib/docs/ComponentCode.svelte";
	import ComponentHeader from "$lib/docs/ComponentHeader.svelte";
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import type { AppShellOptions } from "$lib/modules/navigation/app-shell-options";
	import { APP_SHELL_OPTIONS } from "$lib/modules/navigation/app-shell-options";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

	let optionsAsString = $state("loading");
	let error = $state();

	const optionsStore: Writable<AppShellOptions> = getContext(APP_SHELL_OPTIONS);

	optionsStore.subscribe((value) => {
		optionsAsString = JSON.stringify(value, undefined, 2);
	});

	$effect(() => {
		try {
            const newOptions = JSON.parse(optionsAsString);
			optionsStore.set(newOptions);
            error = undefined;
		} catch (e) {
			error = e;
		}
	});
</script>

<ComponentHeader
	title="App Shell"
	description="The root component for your next app/website. It is actually being used by the site you're currently looking at. Try out the options live by changing some values in the demo below!"
></ComponentHeader>

Code
<ComponentCode>
	&lt;AppShell &#123;navigation&#125; &#123;options&#125;&gt;&lt;/AppShell&gt;
</ComponentCode>

Demo
<ComponentPlayground>
	<textarea class="textarea textarea-bordered w-80 h-96" bind:value={optionsAsString}></textarea>
	{#if error}<div class="text-error">{error}</div>{/if}
</ComponentPlayground>
