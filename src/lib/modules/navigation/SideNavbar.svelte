<script lang="ts">
	import { isActiveLink } from "./active-link.svelte.js";
	import {
		getComputedOptions,
		type AppShellOptions,
		type AppShellSidebarOptions
	} from "./app-shell-options.js";

	let { options }: { options?: AppShellOptions } = $props();
	let computedOptions: AppShellSidebarOptions = $state(getComputedOptions(options, "sidebar"));
	$effect(() => {
		computedOptions = getComputedOptions(options, "sidebar");
	});
</script>

<div
	class="pt-12 p-2 flex flex-col gap-4"
	style="background-color: {computedOptions?.bgColor}; color: {computedOptions?.textColor}; width:{computedOptions.width ||
		200}px; --navbarTextColor: {computedOptions?.textColor};"
>
	{#if computedOptions?.logoUrl || computedOptions?.title}
		<div class="w-full flex flex-col justify-center items-center text-sm tracking-wider mb-8">
			{#if computedOptions?.logoUrl}
				<a href="/">
					<img src={computedOptions?.logoUrl} alt="Logo" width="160px" />
				</a>
			{/if}
			{#if computedOptions?.title}
				<div class="text-xl">{computedOptions.title}</div>
			{/if}
		</div>
	{/if}

	{#each computedOptions?.navigation.entries as entry}
		<div class="flex flex-col gap-1 w-full">
			<a href={entry.link} use:isActiveLink={"menu-entry-active"}>
				<div
					class="text-lg tracking-wider p-2 rounded-md flex flex-row gap-3 items-center"
					style={entry.entries
						? "background-color: oklch(from var(--navbarTextColor) l c h / .05);"
						: ""}
				>
					<i class="text-md {entry.icon}"></i>
					<span>{entry.text}</span>
				</div>
			</a>
			{#each entry.entries as subEntry}
				<div class="pl-8">
					<a href={subEntry.link} use:isActiveLink={"menu-entry-active"}>
						<div class="p-2 menu-entry">
							{subEntry.text}
						</div>
					</a>
				</div>
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
