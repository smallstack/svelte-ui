<script lang="ts">
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import type { AppShellTabBarOptions } from "$lib/index.js";
	import TabBar from "$lib/modules/navigation/TabBar.svelte";

	let example: AppShellTabBarOptions = {
		bgColor: "oklch(var(--p))",
		textColor: "oklch(var(--pc))",
		navigation: {
			entries: [
				{ icon: "fas fa-home", text: "Home", link: "/" },
				{ icon: "fas fa-list", text: "Forms", link: "/forms/date-time-range-input" },
				{ icon: "fas fa-box", text: "Tabs", link: "/modules/navigation/tabbar" },
				{ icon: "fas fa-bolt", text: "Actions", link: "/actions/overlay" }
			]
		}
	};

	let iconsOnlyOptions: AppShellTabBarOptions = { ...example, showText: false };
	let iconsAndTextOptions: AppShellTabBarOptions = { ...example, showText: true };
	let iconsAndSuperBtnOptions: AppShellTabBarOptions = {
		...example,
		showText: true,
		superBtn: {
			icon: "fas fa-qrcode",
			callbackFn: () => {
				alert("Super Button clicked");
			}
		}
	};
</script>

<ComponentPlayground title="Icons only">
	<TabBar options={iconsOnlyOptions}></TabBar>
</ComponentPlayground>

<ComponentPlayground title="Icon & Text">
	<TabBar options={iconsAndTextOptions}></TabBar>
</ComponentPlayground>

<ComponentPlayground title="Icon & Super Button">
    <div class="pb-8">The Super Button currently does not work when the TabBar component is used via web component.</div>
	<TabBar options={iconsAndSuperBtnOptions}></TabBar>
</ComponentPlayground>
