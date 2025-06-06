<script lang="ts">
	import { browser } from "$app/environment";
	import { afterNavigate } from "$app/navigation";
	import PullToRefresh from "pulltorefreshjs";
	import { setContext } from "svelte";
	import { writable } from "svelte/store";
	import {
		APP_SHELL_OPTIONS,
		APP_SHELL_STATS,
		getComputedOptions,
		type AppShellOptions,
		type AppShellStats
	} from "./app-shell-options.js";
	import AppHeader from "./AppHeader.svelte";
	import { breakpointService } from "./breakpoint.service.svelte.js";
	import Navbar from "./Navbar.svelte";
	import SideNavbar from "./SideNavbar.svelte";
	import TabBar from "./TabBar.svelte";

	let defaults: AppShellOptions = {
		bgColor: "var(--color-primary)",
		textColor: "var(--color-primary-content)",
		navbar: {
			show: true,
			showNavigation: false,
			height: 64
		},
		sidebar: {
			show: true,
			width: 200
		},
		appHeader: {
			show: false,
			showMenuTriggerLeft: false,
			showMenuTriggerRight: true,
			useSafeArea: true
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
	const statsStore = writable<AppShellStats>({
		height: 0,
		width: 0,
		mainContentHeight: 0,
		mainContentWidth: 0
	});
	$effect(() => {
		const appShellOptions = $optionsStore;

		let mainContentHeight = breakpointService.windowHeight;
		let mainContentWidth = breakpointService.windowWidth;
		if (breakpointService.matches(appShellOptions?.navbar?.show))
			mainContentHeight -= appShellOptions.navbar.height || 64;
		if (breakpointService.matches(appShellOptions?.appHeader?.show))
			mainContentHeight -= appShellOptions.appHeader.height || 64;
		if (breakpointService.matches(appShellOptions?.tabBar?.show))
			mainContentHeight -= appShellOptions.tabBar.height || 64;
		if (breakpointService.matches(appShellOptions?.sidebar?.show))
			mainContentWidth -= appShellOptions.sidebar.width || 180;

		statsStore.set({
			height: breakpointService.windowHeight,
			width: breakpointService.windowWidth,
			mainContentHeight,
			mainContentWidth
		});
	});
	setContext(APP_SHELL_STATS, statsStore);

	// add safe area padding
	let containerHeight = $state(
		breakpointService.matches($optionsStore?.tabBar?.show)
			? "height: calc(100lvh - env(safe-area-inset-bottom))"
			: "height: 100lvh; padding-bottom: env(safe-area-inset-bottom)"
	);
	let contentHeight = $derived(
		breakpointService.matches($optionsStore?.tabBar?.show)
			? `height: calc(${$statsStore.mainContentHeight}px - env(safe-area-inset-bottom))`
			: `height: ${$statsStore.mainContentHeight}px; padding-bottom: env(safe-area-inset-bottom)`
	);

	// scroll main to top after navigation
	afterNavigate(() => {
		document.getElementById("app-shell-main").scrollTo(0, 0);
	});

	// add pull to refresh
	if (browser)
		PullToRefresh.init({
			mainElement: document.getElementById("app-shell-main"),
			onRefresh() {
				window.location.reload();
			},
			shouldPullToRefresh() {
				return !document.getElementById("app-shell-main").scrollTop;
			}
		});
</script>

<div class="w-lvw h-lvh relative" style={containerHeight}>
	{#if breakpointService.matches($optionsStore?.appHeader?.show)}
		<AppHeader options={getComputedOptions($optionsStore, "appHeader")}></AppHeader>
	{/if}
	{#if breakpointService.matches($optionsStore?.navbar?.show)}
		<Navbar options={getComputedOptions($optionsStore, "navbar")}></Navbar>
	{/if}
	<div class="flex flex-row overflow-hidden" style={contentHeight}>
		{#if breakpointService.matches($optionsStore?.sidebar?.show)}
			<SideNavbar options={getComputedOptions($optionsStore, "sidebar")}></SideNavbar>
		{/if}
		<div class="flex flex-col">
			<div
				class="overflow-auto"
				id="app-shell-main"
				style="height: {$statsStore.mainContentHeight}px; width: {$statsStore.mainContentWidth}px;"
			>
				{@render children()}
			</div>
		</div>
	</div>
	{#if breakpointService.matches($optionsStore?.tabBar?.show)}
		<TabBar options={getComputedOptions($optionsStore, "tabBar")}></TabBar>
	{/if}
</div>
