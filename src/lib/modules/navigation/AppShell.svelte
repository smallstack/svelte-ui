<script lang="ts">
	import { browser } from "$app/environment";
	import { setContext } from "svelte";
	import { writable } from "svelte/store";
	import { APP_SHELL_OPTIONS, type AppShellOptions } from "./app-shell-options.js";
	import AppHeader from "./AppHeader.svelte";
	import { breakpointService } from "./breakpoint.service.svelte.js";
	import Navbar from "./Navbar.svelte";
	import SideNavbar from "./SideNavbar.svelte";
	import TabBar from "./TabBar.svelte";

	let defaults: AppShellOptions = {
		bgColor: "oklch(var(--p))",
		textColor: "oklch(var(--pc))",
		navbar: {
			show: true,
			showNavigation: true,
			height: 64
		},
		sidebar: {
			show: true,
			width: 200
		},
		appHeader: {
			show: false,
			showMenuTriggerLeft: false,
			showMenuTriggerRight: true
		},
		tabBar: {
			show: false,
			height: 64
		}
	};

	let { children, options }: { children: any; options: AppShellOptions } = $props();

	// create an options writable store, input options shall still be preferred
	const optionsStore = writable<AppShellOptions>({});
	$effect(() =>
		optionsStore.update((currentValue) => ({ ...(currentValue || {}), ...defaults, ...options }))
	);
	setContext(APP_SHELL_OPTIONS, optionsStore);

	// add calculated states
	let mainContentHeight = $state(0);
	let mainContentWidth = $state(0);
	let windowInnerHeight = $state(0);
	let windowInnerWidth = $state(0);

	$effect(() => {
		const appShellOptions = $optionsStore;
		let newMainContentHeight = windowInnerHeight;
		let newMainContentWidth = windowInnerWidth;
		if (breakpointService.matches(appShellOptions?.navbar?.show))
			newMainContentHeight -= appShellOptions.navbar.height || 64;
		if (breakpointService.matches(appShellOptions?.appHeader?.show))
			newMainContentHeight -= appShellOptions.appHeader.height || 64;
		if (breakpointService.matches(appShellOptions?.tabBar?.show))
			newMainContentHeight -= appShellOptions.tabBar.height || 64;
		if (breakpointService.matches(appShellOptions?.sidebar?.show))
			newMainContentWidth -= appShellOptions.sidebar.width || 180;

		mainContentHeight = newMainContentHeight;
		mainContentWidth = newMainContentWidth;
	});

	// add window listener functions
	function dispatchWindowResize() {
		if (browser) {
			windowInnerHeight = window.innerHeight;
			windowInnerWidth = window.innerWidth;
		}
	}
	dispatchWindowResize();
</script>

<div class="w-svw h-svh relative">
	{#if breakpointService.matches($optionsStore?.appHeader?.show)}
		<AppHeader options={$optionsStore}></AppHeader>
	{/if}
	{#if breakpointService.matches($optionsStore?.navbar?.show)}
		<Navbar options={$optionsStore}></Navbar>
	{/if}
	<div class="flex flex-row overflow-hidden" style="height: {mainContentHeight}px">
		{#if breakpointService.matches($optionsStore?.sidebar?.show)}
			<SideNavbar options={$optionsStore}></SideNavbar>
		{/if}
		<div class="overflow-auto" style="height: {mainContentHeight}px; width: {mainContentWidth}px;">
			{@render children()}
		</div>
	</div>
	{#if breakpointService.matches($optionsStore?.tabBar?.show)}
		<TabBar options={$optionsStore}></TabBar>
	{/if}
</div>
