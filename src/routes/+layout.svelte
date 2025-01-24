<script lang="ts">
	import { type AppShellOptions } from "$lib/modules/navigation/app-shell-options.js";
	import AppShell from "$lib/modules/navigation/AppShell.svelte";
	import { BREAKPOINTS, MD_AND_UP } from "$lib/modules/navigation/breakpoint.service.svelte.js";
	import type { Navigation } from "$lib/modules/navigation/navigation.js";
	import { initI18n } from "$lib/stores/i18n.store.js";
	import "../app.css";

	initI18n({
		resources: {
			de: {
				translation: {
					navigation: {
						about: "Über"
					},
					actions: {
						clear: "Leeren"
					}
				}
			},
			en: {
				translation: {
					navigation: {
						about: "About",
						gettingStarted: "Getting Started"
					},
					actions: {
						clear: "Clear"
					}
				}
			}
		}
	});

	let navigation: Navigation = {
		entries: [
			{
				text: "Getting Started",
				icon: "fas fa-home",
				link: "/",
				entries: [
					{
						text: { de: "Über", en: "About" },
						link: "/"
					},
					{
						text: "navigation.gettingStarted",
						link: "/install"
					}
				]
			},
			{
				text: "Forms Module",
				icon: "fas fa-list",
				entries: [
					// {
					// 	text: "String Input",
					// 	link: "/forms/input"
					// },
					{
						text: "Date Time Range Input",
						link: "/forms/date-time-range-input"
					},
					{
						text: "Signature Pad Input",
						link: "/forms/signature-pad-input"
					}
				]
			},
			{
				text: "Modals Module",
				icon: "fas fa-window-restore",
				entries: [
					{
						text: "Modal Service",
						link: "/modules/modals/modal-service"
					}
				]
			},
			{
				text: "Navigation Module",
				icon: "fas fa-compass",
				entries: [
					{
						text: "App Shell",
						link: "/modules/navigation/app-shell"
					},
					{
						text: "Active Link Action",
						link: "/modules/navigation/active-link"
					},
					{
						text: "Tab Navigation",
						link: "/modules/navigation/tabbar"
					}
				]
			},
			{
				text: "Actions Module",
				icon: "fas fa-bolt",
				entries: [
					{
						text: "Overlay",
						link: "/actions/overlay"
					},
					{
						text: "In Viewport",
						link: "/actions/viewport"
					}
				]
			},
			{
				text: "Chat Module",
				icon: "fas fa-comments",
				entries: [
					{
						text: "Message Thread",
						link: "/modules/chat/message-thread"
					},
					{
						text: "Chat Window",
						link: "/modules/chat/chat-window"
					}
				]
			}
		]
	};

	let options: AppShellOptions = {
		logoUrl: "/svelte-ui-logo.svg",
		title: "Svelte UI",
		sidebar: {
			show: MD_AND_UP,
			width: 256,
			logoUrl: null,
			title: null
		},
		navbar: {
			show: MD_AND_UP,
			showNavigation: false
		},
		appHeader: {
			show: [BREAKPOINTS.XS, BREAKPOINTS.SM],
			showMenuTriggerRight: true,
			useSafeArea: true
		},
		navigation
	};
</script>

<AppShell {options}>
	<div class="w-full p-5 text-base text-black">
		<div class="hidden md:flex flex-row flex-wrap justify-end items-center mb-8 gap-2">
			<img src="https://img.shields.io/github/package-json/v/smallstack/svelte-ui" alt="Version" />
			<a href="https://www.npmjs.com/package/@smallstack/svelte-ui" target="_blank">
				<img
					src="https://img.shields.io/npm/dw/%40smallstack%2Fsvelte-ui?logo=npm&label=esm"
					alt="npm downloads"
					class="h-5"
				/>
			</a>
			<!-- test status -->
			<img
				src="https://github.com/smallstack/svelte-ui/actions/workflows/ci.yml/badge.svg"
				alt="GitHub Workflow Status"
				class="h-5"
			/>
			<!-- stars -->
			<a href="https://github.com/smallstack/svelte-ui" target="_blank">
				<img
					src="https://img.shields.io/github/stars/smallstack/svelte-ui?style=flat"
					alt="GitHub stars"
					class="h-5"
				/>
			</a>
			<!-- activity -->
			<a href="https://github.com/smallstack/svelte-ui" target="_blank">
				<img
					src="https://img.shields.io/github/commit-activity/w/smallstack/svelte-ui/main?style=flat"
					alt="Community activity"
					class="h-5"
				/>
			</a>
			<!-- license -->
			<a href="https://github.com/smallstack/svelte-ui" target="_blank">
				<img
					src="https://img.shields.io/github/license/smallstack/svelte-ui?style=flat"
					alt="License"
					class="h-5"
				/>
			</a>
		</div>
		<slot></slot>
	</div>
</AppShell>
