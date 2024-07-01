<script lang="ts">
	import { browser } from "$app/environment";
	import { setContext } from "svelte";
	import { writable } from "svelte/store";
	import { APP_SHELL_OPTIONS, type AppShellOptions } from "./app-shell-options.js";
	import AppHeader from "./AppHeader.svelte";
	import Navbar from "./Navbar.svelte";
	import type { Navigation } from "./navigation.js";
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
		if (appShellOptions?.navbar?.show === true)
			newMainContentHeight -= appShellOptions.navbar.height || 64;
		if (appShellOptions?.appHeader?.show === true)
			newMainContentHeight -= appShellOptions.appHeader.height || 64;
		if (appShellOptions?.tabBar?.show === true)
			newMainContentHeight -= appShellOptions.tabBar.height || 64;
		if (appShellOptions?.sidebar?.show === true)
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

<svelte:window onresize={dispatchWindowResize} />

<div class="w-svw h-svh relative">
	{#if $optionsStore?.appHeader?.show === true}
		<AppHeader options={$optionsStore}></AppHeader>
	{/if}
	{#if $optionsStore?.navbar?.show === true}
		<Navbar options={$optionsStore}></Navbar>
	{/if}
	<div class="flex flex-row overflow-hidden" style="height: {mainContentHeight}px">
		{#if $optionsStore?.sidebar?.show === true}
			<SideNavbar options={$optionsStore}></SideNavbar>
		{/if}
		<div class="overflow-auto" style="height: {mainContentHeight}px; width: {mainContentWidth}px;">
			{@render children()}
		</div>
	</div>
	{#if $optionsStore?.tabBar?.show === true}
		<TabBar options={$optionsStore}></TabBar>
	{/if}
</div>
