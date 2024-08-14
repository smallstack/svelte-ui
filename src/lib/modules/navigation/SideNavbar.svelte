<script lang="ts">
	import { t } from "$lib/stores/i18n.js";
	import { isActiveLink } from "./active-link.svelte.js";
	import { type AppShellSidebarOptions } from "./app-shell-options.js";

	let { options }: { options?: AppShellSidebarOptions } = $props();
</script>

<div
	class="pt-12 p-2 flex flex-col gap-4"
	style="background-color: {options?.bgColor}; color: {options?.textColor}; width:{options.width ||
		200}px; --navbarTextColor: {options?.textColor};"
>
	{#if options?.logoUrl || options?.title}
		<div class="w-full flex flex-col justify-center items-center text-sm tracking-wider mb-8">
			{#if options?.logoUrl}
				<a href="/">
					<img src={options?.logoUrl} alt="Logo" width="160px" />
				</a>
			{/if}
			{#if options?.title}
				<div class="text-xl">{options.title}</div>
			{/if}
		</div>
	{/if}

	{#snippet menuEntry(entry, extraClasses = "")}
		<a
			href={entry.link}
			use:isActiveLink={{
				activeClass: entry.activeLinkOptions?.activeClass || "menu-entry-active",
				includeQueryParams: entry.activeLinkOptions?.includeQueryParams
			}}
		>
			<div class="p-2 rounded-md flex flex-row gap-3 items-center {extraClasses}">
				{#if entry.icon}
					<i class="text-md {entry.icon}"></i>
				{/if}
				<span>{$t(entry.text)}</span>
			</div>
		</a>
	{/snippet}

	{#each options?.navigation?.entries as entry}
		<div class="flex flex-col gap-1 w-full">
			{@render menuEntry(entry, "p-2 text-lg")}
			{#each entry.entries as subEntry}
				{@render menuEntry(subEntry, "pl-8 text-md")}
			{/each}
		</div>
	{/each}
</div>

<style>
	:global {
		.menu-entry:hover {
			@apply rounded-md cursor-pointer;
			background-color: oklch(from var(--navbarTextColor) l c h / 0.5);
		}

		.menu-entry-active {
			@apply rounded-md cursor-pointer;
			background-color: oklch(from var(--navbarTextColor) l c h / 0.2) !important;
		}
	}
</style>
