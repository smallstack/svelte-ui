<script lang="ts">
	import { type AppShellNavbarOptions } from "./app-shell-options.js";
	let { options }: { options?: AppShellNavbarOptions } = $props();
</script>

<div
	class="w-full flex flex-row gap-2 justify-between items-center p-4"
	style="background-color: {options?.bgColor}; color: {options?.textColor}; height:{options.height ||
		64}px; --navbarBgColor: {options?.bgColor}; --navbarTextColor: {options?.textColor}"
>
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
	<div class="flex flex-row gap-8 items-center">
		{#if options?.showNavigation}
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
