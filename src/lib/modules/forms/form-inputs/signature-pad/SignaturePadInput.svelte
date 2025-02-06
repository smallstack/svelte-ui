<svelte:options
	customElement={{
		tag: "sui-signature-pad-input",
		shadow: "none",
		props: {
			signature: { type: "String", reflect: true }
		}
	}}
/>

<script lang="ts">
	import { t } from "$lib/stores/i18n.store";
	import { onMount } from "svelte";
	import { SignaturePadAction } from "./signature-pad-action";

	let { signature = $bindable(), disabled }: { signature: string; disabled?: boolean } = $props();
	let layers: { path: string; width: number; height: number }[] = $state([]);
	let width: number = $state(undefined);
	let height: number = $state(undefined);
	let preview: string = $state(undefined);

	onMount(() => {
		if (signature) {
			const parser = new DOMParser();
			const svg = parser.parseFromString(atob(signature.split(",")[1]), "image/svg+xml");
			layers = Array.from(svg.querySelectorAll("path")).map((path) => ({
				path: path.getAttribute("d"),
				width,
				height
			}));
		}
	});

	const ondraw = (path: string) => {
		if (disabled) return;
		preview = path;
	};
	const oncomplete = (path: string) => {
		if (disabled) return;
		preview = "";
		layers = [...layers, { width, height, path }];
		signature =
			"data:image/svg+xml;base64," +
			btoa(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">${layers.map((l) => `<path d="${l.path}" />`)}</svg>`
			);
	};

	const clear = () => {
		layers = [];
		signature = undefined;
	};
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="input input-bordered relative h-[360px] w-full px-0 cursor-pointer">
	<div class="absolute bottom-24 left-4 right-4 border-t border-dotted border-gray-300"></div>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="h-full w-full"
		use:SignaturePadAction={{ ondraw, oncomplete }}
		bind:clientWidth={width}
		bind:clientHeight={height}
		on:click|preventDefault|self={() => false}
		on:touchmove|preventDefault|self={() => false}
	>
		<svg
			class="pointer-events-none absolute h-full w-full fill-black"
			viewBox="0 0 {width} {height}"
		>
			{#each layers as layer}
				<path d={layer.path} />
			{/each}
		</svg>

		{#if preview}
			<svg
				class="pointer-events-none absolute h-full w-full fill-gray-900"
				viewBox="0 0 {width} {height}"
			>
				<path d={preview} />
			</svg>
		{/if}
	</div>
	{#if !disabled}
		<button class="btn btn-outline btn-primary btn-sm absolute right-2 top-2" on:click={clear}
			>{$t("actions.clear")}</button
		>
	{/if}
</div>
