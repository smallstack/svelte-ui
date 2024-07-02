<script lang="ts">
	import {
		getComputedOptions,
		type AppShellOptions,

		type AppShellTabBarOptions
	} from "./app-shell-options.js";

	let { options }: { options?: AppShellOptions } = $props();

	let computedOptions: AppShellTabBarOptions = getComputedOptions(options, "tabBar");
</script>

<div
	class="flex flex-row gap-2 w-full justify-evenly items-center p-4"
	style="background-color: {computedOptions?.bgColor}; color: {computedOptions?.textColor}; height:{computedOptions.height ||
		64}px; --navbarBgColor: {computedOptions?.bgColor}; --navbarTextColor: {computedOptions?.textColor}"
>
	{#each computedOptions?.navigation?.entries as entry}
		<a href={entry.link}>
			<div class="flex flex-col gap-0 justify-center items-center">
				<i class="text-xl {entry.icon}"></i>
				{#if computedOptions.showText === true}
					<div>{entry.text}</div>
				{/if}
			</div>
		</a>
	{/each}
</div>
