<script lang="ts">
	import type { AppShellTabBarOptions } from "$lib/index.js";
	import TabBar from "$lib/modules/navigation/TabBar.svelte";

	const options: AppShellTabBarOptions = {
		show: true,
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
</script>

<div class="fixed bottom-0 left-0 right-0">
<TabBar {options}></TabBar>
</div>
