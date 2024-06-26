<script lang="ts">
	import "tailwindcss/tailwind.css";
	import "../app.css";
</script>

<div class="flex flex-row">
	<div class="bg-gray-200 w-80 rounded-2xl p-5 flex flex-col gap-8 m-4">
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
			<div class="pl-3">
				<a href="/forms/form-container">Form</a>
			</div>
			<div class="pl-3">
				<a href="/forms/form-container">Form Service</a>
			</div>
		</div>
		<div class="flex flex-col gap-1">
			<div class="text-lg font-semibold tracking-wider">FORM INPUTS</div>
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
			<div class="pl-3">
				<a href="/actions/viewport">In Viewport</a>
			</div>
		</div>
	</div>
	<div class="w-full rounded-2xl p-5 text-base text-black m-4 bg-gray-100">
		<div class="hidden md:flex flex-row flex-wrap justify-end items-center mb-8 gap-4">
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
					src="https://img.shields.io/github/commit-activity/w/smallstack/svelte-ui/main?style=flat
"
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
		<div class="alert alert-warning mb-8">This library is based on Svelte 5 beta versions. Even though these versions are already "release candidates", things might not work well enough for your production usage. Use at own risk.</div>
		<slot></slot>
	</div>
</div>
