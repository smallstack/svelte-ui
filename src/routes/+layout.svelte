<script lang="ts">
	import "tailwindcss/tailwind.css";
	import "../app.css";
</script>

<div class="flex flex-row gap-4">
	<div class="bg-gray-200 w-80 rounded-2xl p-5 flex flex-col gap-8 m-8">
		<div class="w-full flex flex-col justify-center items-center text-sm tracking-wider mb-8">
			<a class="" href="/">
				<img src="/svelte-ui-logo.svg" alt="Svelte UI Logo" width="160px" />
			</a>
			<img
				src="https://img.shields.io/github/package-json/v/smallstack/svelte-ui
"
				alt="Version"
			/>
		</div>

		<div class="flex flex-col gap-1">
			<div class="text-lg font-semibold tracking-wider">Getting Started</div>
			<div class="pl-3">
				<a href="/install">Install</a>
			</div>
		</div>

		<div class="flex flex-col gap-1">
			<div class="text-lg font-semibold tracking-wider">FORMS</div>
			<!-- <div class="pl-3">
				<a href="/forms/input">Input</a>
			</div> -->
			<div class="pl-3">
				<a href="/forms/date-time-range-input">Date Time Range Input</a>
			</div>
		</div>

		<div class="flex flex-col gap-1">
			<div class="text-lg font-semibold tracking-wider">ACTIONS</div>
			<div class="pl-3">
				<a href="/actions/overlay">Overlay</a>
			</div>
		</div>
	</div>
	<div class="w-full rounded-2xl p-5 text-base text-black m-8">
		<div class="flex flex-row justify-end items-center mb-8 gap-4">
			<a href="https://www.npmjs.com/package/@smallstack/svelte-ui" target="_blank">
				<img
					src="https://img.shields.io/npm/dw/%40smallstack%2Fsvelte-ui?logo=npm&label=esm"
					alt="npm downloads"
				/>
			</a>
			<!-- test status -->
			<img
				src="https://github.com/smallstack/svelte-ui/actions/workflows/ci.yml/badge.svg"
				alt="GitHub Workflow Status"
			/>
			<!-- stars -->
			<a href="https://github.com/smallstack/svelte-ui" target="_blank">
				<img
					src="https://img.shields.io/github/stars/smallstack/svelte-ui?style=flat"
					alt="GitHub stars"
				/>
			</a>
			<!-- activity -->
			<a href="https://github.com/smallstack/svelte-ui" target="_blank">
				<img
					src="https://img.shields.io/github/commit-activity/w/smallstack/svelte-ui/main?style=flat
"
					alt="Community activity"
				/>
			</a>
			<!-- license -->
			<a href="https://github.com/smallstack/svelte-ui" target="_blank">
				<img
					src="https://img.shields.io/github/license/smallstack/svelte-ui?style=flat"
					alt="License"
				/>
			</a>
		</div>
		<slot></slot>
	</div>
</div>
