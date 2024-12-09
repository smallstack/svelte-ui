<script lang="ts">
	import ComponentCode from "$lib/docs/ComponentCode.svelte";
	import ComponentPageHeader from "$lib/docs/ComponentPageHeader.svelte";
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import {
		APP_SHELL_OPTIONS,
		APP_SHELL_STATS,
		type AppShellOptions,
		type AppShellStats
	} from "$lib/index.js";
	import { getContext } from "svelte";
	import type { Readable, Writable } from "svelte/store";

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

	const statsStore: Readable<AppShellStats> = getContext(APP_SHELL_STATS);
</script>

<ComponentPageHeader
	title="App Shell"
	description="The root component for your next app/website. It is actually being used by the site you're currently looking at. Try out the options live by changing some values in the demo below!"
></ComponentPageHeader>

<ComponentPageHeader title="Usage" level="2" />
<ComponentCode>
	&lt;AppShell &#123;navigation&#125; &#123;options&#125;&gt;&lt;/AppShell&gt;
</ComponentCode>

<ComponentPageHeader title="App Shell Stats" level="2" />
You can get the stats of the App Shell by using the following code:
<ComponentPlayground value={$statsStore}>
	<pre>{`const statsStore: Readable<AppShellStats> = getContext(APP_SHELL_STATS);`}</pre>
</ComponentPlayground>

Demo
<ComponentPlayground>
	<textarea class="textarea textarea-bordered w-96 h-96 text-black" bind:value={optionsAsString}
	></textarea>
	{#if error}<div class="text-error">{error}</div>{/if}
</ComponentPlayground>
