<script lang="ts">
	import { onMount } from "svelte";
	import "tailwindcss/tailwind.css";

	let version: string;
	onMount(() => {
		version = (window as any).pkg.version;
	});
</script>

<div class="flex flex-row gap-4 m-8">
	<div class="bg-primary w-80 rounded-2xl p-5 flex flex-col gap-2 text-primary-content">
		<a class="text-center text-4xl font-bold tracking-wider mb-8" href="/">SVELTE UI</a>
		<div class="text-lg font-semibold tracking-wider">Getting Started</div>
		<div class="pl-3">
			<a href="/install">Install</a>
		</div>
		<div class="text-lg font-semibold tracking-wider">FORMS</div>
		<div class="pl-3">
			<a href="/forms/input">Input</a>
		</div>
	</div>
	<div class="bg-gray-100 w-full rounded-2xl p-5 text-base text-black">
		<slot></slot>
		<div class="flex flex-row justify-end gap-1 text-xs mt-32">
			<a href="https://smallstack.com" target="_blank">smallstack GmbH</a> | Version: {version}
		</div>
	</div>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

	:root {
		font-family: "Poppins", sans-serif;
	}
</style>
