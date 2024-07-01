<script lang="ts">
	import {
		getComputedOptions,
		type AppShellNavbarOptions,
		type AppShellOptions
	} from "./app-shell-options.js";

	let { options }: { options?: AppShellOptions } = $props();

	let computedOptions: AppShellNavbarOptions = getComputedOptions(options, "navbar");
</script>

<div
	class="w-full flex flex-row gap-2 justify-between items-center p-4"
	style="background-color: {computedOptions?.bgColor}; color: {computedOptions?.textColor}; height:{computedOptions.height ||
		64}px; --navbarBgColor: {computedOptions?.bgColor}; --navbarTextColor: {computedOptions?.textColor}"
>
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
	<div class="flex flex-row gap-8 items-center">
		{#if computedOptions?.showNavigation}
			{#each options?.navigation.entries as entry}
				<a class="border-b-2 menu-entry" href={entry.link}>
					{entry.text}
				</a>
			{/each}
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
