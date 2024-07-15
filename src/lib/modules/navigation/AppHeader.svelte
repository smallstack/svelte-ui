<script lang="ts">
	import { fly } from "svelte/transition";
	import { type AppShellAppHeaderOptions } from "./app-shell-options.js";
	import { breakpointService } from "./breakpoint.service.svelte.js";
	import { isActiveLink } from "./active-link.svelte.js";

	let { options }: { options?: AppShellAppHeaderOptions } = $props();
	let showFullscreenMenu = $state(false);
</script>

{#snippet burgerTrigger()}
	<button class="btn btn-ghost" onclick={() => (showFullscreenMenu = !showFullscreenMenu)}>
		<i class="fas fa-bars text-2xl"></i>
	</button>
{/snippet}

{#if showFullscreenMenu}
	<div
		class="fixed top-0 left-0 right-0 bottom-0 z-50 p-8 overflow-x-hidden overflow-y-auto"
		style="background-color: {options?.bgColor}; color: {options?.textColor}; {options.useSafeArea === true ? "padding-top: env(safe-area-inset-top)" : ""}"
		transition:fly={{ duration: 250 }}
	>
		<div class="flex flex-row gap-2 justify-end">
			<button class="btn btn-ghost" onclick={() => (showFullscreenMenu = !showFullscreenMenu)}>
				<i class="fas fa-times text-2xl"></i>
			</button>
		</div>

		<a href="/" onclick={() => (showFullscreenMenu = !showFullscreenMenu)}>
			<div class="flex flex-col gap-2 items-center m-4 mb-12">
				{#if options?.logoUrl}
					<img src={options.logoUrl} alt="LOGO" class="h-36" />
				{/if}
				{#if options?.title}
					<span class="uppercase text-6xl">{options.title}</span>
				{/if}
			</div>
		</a>

		{#snippet menuEntry(entry, extraClasses = "")}
			<a
				href={entry.link}
				use:isActiveLink={"menu-entry-active"}
				onclick={() => (showFullscreenMenu = !showFullscreenMenu)}
			>
				<div class="py-2 rounded-md flex flex-row gap-3 items-center {extraClasses}">
					{#if entry.icon}
						<i class="text-md {entry.icon}"></i>
					{/if}
					<span>{entry.text}</span>
				</div>
			</a>
		{/snippet}

		{#each options?.navigation?.entries as entry}
			<div class="flex flex-col gap-1 w-full">
				{@render menuEntry(entry, "p-2 text-xl")}
				{#each entry.entries as subEntry}
					{@render menuEntry(subEntry, "pl-8 text-lg")}
				{/each}
			</div>
		{/each}

		<!-- <div class="flex flex-col gap-2">
			{#each options?.navigation?.entries as entry}
				<div
					class="text-2xl p-2"
					style="background-color: {options?.bgColor}; color: {options?.textColor};"
				>
					<span>{entry.text}</span>
					{#each entry.entries as child}
						<a href={child.link} onclick={() => (showFullscreenMenu = !showFullscreenMenu)}>
							<div
								class="p-2 text-base cursor-pointer"
								style="background-color: {options?.bgColor}; color: {options?.textColor};"
							>
								{child.text}
							</div>
						</a>
					{/each}
				</div>
			{/each}
		</div> -->
	</div>
{/if}
<div
	class="w-full flex flex-row gap-2 justify-between items-center p-2"
	style="background-color: {options?.bgColor}; color: {options?.textColor}; height:calc({options.height ||
		64}px + {options.useSafeArea === true ? "env(safe-area-inset-top)" : "0px"});{options.useSafeArea === true ? "padding-top: env(safe-area-inset-top)" : ""}"
>
	<div class="w-16">
		{#if breakpointService.matches(options.showMenuTriggerLeft)}
			{@render burgerTrigger()}
		{/if}
	</div>
	<a href="/">
		<div class="flex flex-row gap-2 items-center">
			{#if options?.logoUrl}
				<img src={options.logoUrl} alt="LOGO" class="h-12" />
			{/if}
			{#if options?.title}
				<span class="uppercase text-2xl">{options.title}</span>
			{/if}
		</div>
	</a>
	<div class="w-16 text-end">
		{#if breakpointService.matches(options.showMenuTriggerRight)}
			{@render burgerTrigger()}
		{/if}
	</div>
</div>

<style>
	.menu-entry {
		border-top-width: 2px;
		border-bottom-width: 2px;
		border-color: var(--navbarBgColor);
		transition: all ease-in-out 300ms;
		cursor: pointer;
		user-select: none;
	}

	.menu-entry:hover {
		border-bottom-color: var(--navbarTextColor);
	}
</style>
