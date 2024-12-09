<script lang="ts">
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import ComponentSubHeader from "$lib/docs/ComponentPageHeader.svelte";
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
				{ icon: "fas fa-bolt", text: "Alert", clickFn: () => alert("Alert clicked") }
			]
		}
	};

	let iconsOnlyOptions: AppShellTabBarOptions = { ...example, showText: false };
	let iconsAndTextOptions: AppShellTabBarOptions = { ...example, showText: true };
	let iconsAndSuperBtnOptions: AppShellTabBarOptions = {
		...example,
		showText: true,
		showSuperBtn: true,
		navigation: {
			entries: [
				{ icon: "fas fa-home", text: "Home", link: "/" },
				{ icon: "fas fa-list", text: "Forms", link: "/forms/date-time-range-input" },
				{ icon: "fas fa-qrcode", text: "SCANNER", clickFn: () => alert("Scanner clicked") },
				{ icon: "fas fa-box", text: "Tabs", link: "/modules/navigation/tabbar" },
				{ icon: "fas fa-bolt", text: "Alert", clickFn: () => alert("Alert clicked") }
			]
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
	<div class="pb-8">
		The Super Button currently does not work when the TabBar component is used via web component.
	</div>
	<TabBar options={iconsAndSuperBtnOptions}></TabBar>
</ComponentPlayground>

<ComponentSubHeader title="Safe Areas" />
If the TabBar component is used within an AppShell component, it will automatically adjust to the safe
areas of the device. Otherwise the AppShell component itself will add the safe areas to itself at the
bottom.
<p>
	To see the safe areas in action, go to this page with a device that uses save areas: <a class="btn btn-primary"
		href="/modules/navigation/tabbar/fullscreen-example">TabBar Fullscreen Example</a
	>
</p>
