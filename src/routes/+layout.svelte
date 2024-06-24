<script lang="ts">
	import "tailwindcss/tailwind.css";
	import "../app.css";
</script>

<div class="flex flex-row gap-4">
	<div class="bg-gray-200 w-80 rounded-2xl p-5 flex flex-col gap-8 m-8">
		<div class="w-full flex flex-col justify-center items-center text-sm tracking-wider mb-8">
			<a class="" href="/">
				<img src="/svelte-ui-logo-200.png" alt="Svelte UI Logo" />
			</a>
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
				<a href="/forms/input">Input</a>
			</div>
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
			<img
				src="https://github.com/smallstack/svelte-ui/actions/workflows/ci.yml/badge.svg"
				alt="GitHub Workflow Status"
			/>
			<a href="https://github.com/smallstack/svelte-ui" target="_blank">
				<i class="fab fa-github text-2xl"></i>
			</a>
		</div>
		<slot></slot>
	</div>
</div>
