<script lang="ts">
	import { isActiveLink } from "./active-link.svelte.js";
	import {
		getComputedOptions,
		type AppShellAppHeaderOptions,
		type AppShellOptions
	} from "./app-shell-options.js";

	let { options }: { options?: AppShellOptions } = $props();

	let computedOptions: AppShellAppHeaderOptions = getComputedOptions(options, "tabBar");
</script>

<div
	class="flex flex-row gap-2 w-full justify-evenly items-center p-4"
	style="background-color: {computedOptions?.bgColor}; color: {computedOptions?.textColor}; height:{computedOptions.height ||
		64}px; --navbarBgColor: {computedOptions?.bgColor}; --navbarTextColor: {computedOptions?.textColor}"
>
	{#each options?.navigation?.entries as entry}
		<a href={entry.link}>
			<div class="flex flex-col gap-2">
                <i class="text-xl {entry.icon}"></i>
				<!-- <div>{entry.text}</div> -->
			</div>
		</a>
	{/each}
</div>

<style>
</style>
