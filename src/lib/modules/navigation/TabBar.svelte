<script lang="ts">
	import { type AppShellTabBarOptions } from "./app-shell-options.js";
	let { options }: { options: AppShellTabBarOptions } = $props();

	// divide entries into 2 groups, even if no super btn is provided
	// if super btn is provided, it will be placed in the middle
	// if not, the entries will be divided into 2 groups
	// and the middle entry will be placed in the middle
	let entries = options.navigation?.entries || [];
	let middleIndex = Math.floor(entries.length / 2);
	let leftEntries = entries.slice(0, middleIndex);
	let rightEntries = entries.slice(middleIndex);
</script>

<div
	class="flex flex-row gap-2 w-full justify-evenly items-center p-4 relative"
	style="background-color: {options.bgColor}; color: {options.textColor}; height:{options.height ||
		64}px; --navbarBgColor: {options.bgColor}; --navbarTextColor: {options.textColor}"
>
	{#each leftEntries as entry}
		<a href={entry.link}>
			<div class="flex flex-col gap-0 justify-center items-center">
				<i class="text-xl {entry.icon}"></i>
				{#if options.showText === true}
					<div>{entry.text}</div>
				{/if}
			</div>
		</a>
	{/each}
	{#if options.superBtn}
		<div class="w-4"></div>
		<div class="absolute -top-9 flex flex-col gap-0 items-center text">
			<button
				class="btn btn-circle border-8 btn-lg"
				style="background-color: {options.textColor}; color: {options.bgColor}; border-color: {options.bgColor}; zoom: 1.25"
				onclick={options.superBtn.callbackFn}
			>
				<i class="text-xl {options.superBtn.icon}"></i>
			</button>
			{#if options.superBtn.text}
				<span class="-bottom-4 absolute truncate">{options.superBtn.text}</span>
			{/if}
		</div>
	{/if}
	{#each rightEntries as entry}
		<a href={entry.link}>
			<div class="flex flex-col gap-0 justify-center items-center">
				<i class="text-xl {entry.icon}"></i>
				{#if options.showText === true}
					<div>{entry.text}</div>
				{/if}
			</div>
		</a>
	{/each}
</div>
