<script lang="ts">
	import { type AppShellTabBarOptions } from "./app-shell-options.js";
	import type { NavigationEntry } from "./navigation.js";
	let { options }: { options: AppShellTabBarOptions } = $props();

	let entries = options.navigation?.entries || [];
	let middleIndex = Math.floor(entries.length / 2);
	let leftEntries = entries.slice(0, middleIndex);
	let middleEntry = entries[middleIndex];
	let rightEntries = entries.slice(middleIndex + 1);

	let paddingBottomWithSafeArea = options.useSafeArea !== false ? "padding-bottom: env(safe-area-inset-bottom)" : "";
</script>
{#snippet entryAnchor(entry: NavigationEntry)}
	<a href={entry.link} onclick={entry.clickFn} class="cursor-pointer">
		<div class="flex flex-col gap-0 justify-center items-center">
			<i class="{options.showText ? "text-xl" : "text-2xl"} {entry.icon}"></i>
			{#if options.showText === true}
				<div>{entry.text}</div>
			{/if}
		</div>
	</a>
{/snippet}

{#if options.showSuperBtn}
	<div
		class="flex flex-row"
		style="background-color: {options.bgColor}; color: {options.textColor}; height:{options.height ||
			64}px; --navbarBgColor: {options.bgColor}; --navbarTextColor: {options.textColor}; {paddingBottomWithSafeArea}"
	>
		<div class="flex flex-row gap-2 w-full justify-evenly items-center p-4 pr-6 pl-2">
			{#each leftEntries as entry}
				{@render entryAnchor(entry)}
			{/each}
		</div>
		<div class="relative">
			<div class="absolute -top-9 -left-9 overflow-hidden bottom-0">
				<a
					class="btn btn-circle border-8 btn-lg shadow-none"
					style="background-color: {options.textColor}; color: {options.bgColor}; border-color: {options.bgColor}; zoom: 1.25"
					href={middleEntry.link}
					onclick={middleEntry.clickFn}
				>
					<i class="text-xl {middleEntry.icon}"></i>
				</a>
				{#if middleEntry.text}
					<div class="text-center relative bottom-2 w-20">
						<span class="truncate">{middleEntry.text}</span>
					</div>
				{/if}
			</div>
		</div>
		<div class="flex flex-row gap-2 w-full justify-evenly items-center p-4 pl-6 pr-2">
			{#each rightEntries as entry}
				{@render entryAnchor(entry)}
			{/each}
		</div>
	</div>
{:else}
	<div
		class="flex flex-row gap-2 w-full justify-evenly items-center p-4 relative"
		style="background-color: {options.bgColor}; color: {options.textColor}; height:{options.height ||
			64}px; --navbarBgColor: {options.bgColor}; --navbarTextColor: {options.textColor}; {paddingBottomWithSafeArea}"
	>
		{#each entries as entry}
			{@render entryAnchor(entry)}
		{/each}
	</div>
{/if}
