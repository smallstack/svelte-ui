<script lang="ts">
	import { t } from "$lib/stores/i18n.store.js";
	import { type AppShellNavbarOptions } from "./app-shell-options.js";
	let { options }: { options?: AppShellNavbarOptions } = $props();
</script>

<div
	class="w-full flex flex-row gap-2 justify-between items-center px-5"
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
		{#if options?.showNavigation !== false}
			{#each options?.navigation.entries as entry}
				{#if entry.link}
					<a class="border-b-2 menu-entry" href={entry.link}>
						{$t(entry.text)}
					</a>
				{:else if entry.clickFn}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div class="border-b-2 menu-entry" onclick={() => entry.clickFn()}>
						{$t(entry.text)}
					</div>
				{:else}
					<div>{$t(entry.text)}</div>
				{/if}
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
