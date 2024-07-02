<script lang="ts">
	import { fly } from "svelte/transition";
	import {
		getComputedOptions,
		type AppShellAppHeaderOptions,
		type AppShellOptions
	} from "./app-shell-options.js";
	import { breakpointService } from "./breakpoint.service.svelte.js";

	let { options }: { options?: AppShellOptions } = $props();

	let computedOptions: AppShellAppHeaderOptions = getComputedOptions(options, "appHeader");
	let showFullscreenMenu = $state(false);
</script>

{#snippet burgerTrigger()}
	<button class="btn btn-ghost" onclick={() => (showFullscreenMenu = !showFullscreenMenu)}>
		<i class="fas fa-bars text-xl"></i>
	</button>
{/snippet}

{#if showFullscreenMenu}
	<div
		class="fixed top-0 left-0 w-full h-full z-50 p-2 text-center"
		style="background-color: {computedOptions?.bgColor}; color: {computedOptions?.textColor};"
		transition:fly={{ duration: 250 }}
	>
		<div class="flex flex-row gap-2 justify-end">
			<button class="btn btn-ghost" onclick={() => (showFullscreenMenu = !showFullscreenMenu)}>
				<i class="fas fa-times text-xl"></i>
			</button>
		</div>

		<a href="/" onclick={() => (showFullscreenMenu = !showFullscreenMenu)}>
			<div class="flex flex-col gap-2 items-center m-4 mb-12">
				{#if computedOptions?.logoUrl}
					<img src={computedOptions.logoUrl} alt="LOGO" class="h-12" />
				{/if}
				{#if computedOptions?.title}
					<span class="uppercase text-2xl">{computedOptions.title}</span>
				{/if}
			</div>
		</a>

		<div class="flex flex-col gap-2">
			{#each computedOptions?.navigation?.entries as entry}
				<div
					class="text-2xl p-2"
					style="background-color: {computedOptions?.bgColor}; color: {computedOptions?.textColor};"
				>
					<span>{entry.text}</span>
					{#each entry.entries as child}
						<a href={child.link} onclick={() => (showFullscreenMenu = !showFullscreenMenu)}>
							<div
								class=" p-2 text-base cursor-pointer"
								style="background-color: {computedOptions?.bgColor}; color: {computedOptions?.textColor};"
							>
								{child.text}
							</div>
						</a>
					{/each}
				</div>
			{/each}
		</div>
	</div>
{/if}
<div
	class="w-full flex flex-row gap-2 justify-between items-center p-2"
	style="background-color: {computedOptions?.bgColor}; color: {computedOptions?.textColor}; height:{computedOptions.height ||
		64}px;"
>
	<div class="w-16">
		{#if breakpointService.matches(computedOptions.showMenuTriggerLeft)}
			{@render burgerTrigger()}
		{/if}
	</div>
	<a href="/">
		<div class="flex flex-row gap-2 items-center">
			{#if computedOptions?.logoUrl}
				<img src={computedOptions.logoUrl} alt="LOGO" class="h-12" />
			{/if}
			{#if computedOptions?.title}
				<span class="uppercase text-2xl">{computedOptions.title}</span>
			{/if}
		</div>
	</a>
	<div class="w-16 text-end">
		{#if breakpointService.matches(computedOptions.showMenuTriggerRight)}
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
