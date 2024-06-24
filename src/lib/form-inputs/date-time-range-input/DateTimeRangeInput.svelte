<svelte:options customElement="sui-date-time-range-input" />

<script lang="ts">
	import { DEFAULT_GERMAN_HUMAN_DATE_TIME_FORMAT_WITH_SECONDS } from "$lib/constants/date.constants.js";
	import Overlay from "$lib/overlay/Overlay.svelte";
	import {
		add,
		endOfDay,
		endOfMonth,
		endOfWeek,
		format,
		startOfDay,
		startOfMonth,
		startOfWeek
	} from "date-fns";
	import { de } from "date-fns/locale";

	let inputFromPicker: HTMLInputElement;
	let inputToPicker: HTMLInputElement;
	let overlay: Overlay;

	let {
		from = $bindable<number>(),
		to = $bindable<number>(),
		max,
		min
	}: { from?: number; to?: number; max?: number; min?: number } = $props();

	let inputFromFormatted = $derived(() => {
		return from !== undefined
			? format(from, DEFAULT_GERMAN_HUMAN_DATE_TIME_FORMAT_WITH_SECONDS)
			: "";
	});

	let inputToFormatted = $derived(() => {
		return to !== undefined ? format(to, DEFAULT_GERMAN_HUMAN_DATE_TIME_FORMAT_WITH_SECONDS) : "";
	});

	function setToDay(relative: number): void {
		from = add(startOfDay(new Date()), { days: relative }).valueOf();
		to = add(endOfDay(new Date()), { days: relative }).valueOf();
		overlay.closeOverlay();
	}

	function setToWeek(relative: number): void {
		from = add(startOfWeek(new Date(), { locale: de }), { weeks: relative }).valueOf();
		to = add(endOfWeek(new Date(), { locale: de }), { weeks: relative }).valueOf();
		overlay.closeOverlay();
	}

	function setToMonth(relative: number): void {
		from = add(startOfMonth(new Date()), { months: relative }).valueOf();
		to = add(endOfMonth(new Date()), { months: relative }).valueOf();
		overlay.closeOverlay();
	}

	function reset() {
		from = undefined;
		to = undefined;
		overlay.closeOverlay();
	}
</script>

<input
	bind:this={inputFromPicker}
	bind:value={from}
	type="datetime-local"
	placeholder="von"
	class="invisible absolute"
	{max}
/>
<input
	bind:this={inputToPicker}
	bind:value={to}
	type="datetime-local"
	placeholder="bis"
	class="invisible absolute"
	{min}
/>
<div class="join w-full">
	<input
		placeholder="von"
		type="string"
		class="input input-bordered w-full join-item"
		readonly
		value={inputFromFormatted()}
		onclick={() => inputFromPicker.showPicker()}
	/>
	<input
		placeholder="bis"
		type="string"
		class="input input-bordered w-full join-item"
		readonly
		value={inputToFormatted()}
		onclick={() => inputToPicker.showPicker()}
	/>
	<button
		class="btn btn-primary join-item"
		onclick={(e) => overlay.openOverlay({ trigger: e.target as HTMLElement })}
	>
		<i class="far fa-calendar-days text-lg"></i>
	</button>
</div>

<Overlay bind:this={overlay}>
	<div class="card card-bordered card-compact bg-white shadow-xl" slot="overlay">
		<div class="card-body">
			<div class="flex flex-col gap-1">
				<div class="flex flex-row gap-1 w-full">
					<button class="btn btn-primary btn-sm w-1/3" onclick={() => setToDay(-1)}>Gestern</button>
					<button class="btn btn-primary btn-sm w-1/3" onclick={() => setToDay(0)}>Heute</button>
					<button class="btn btn-primary btn-sm w-1/3" onclick={() => setToDay(1)}>Morgen</button>
				</div>
				<div class="flex flex-row gap-1 w-full">
					<button class="btn btn-primary btn-sm w-1/3" onclick={() => setToWeek(-1)}
						>Letzte Woche</button
					>
					<button class="btn btn-primary btn-sm w-1/3" onclick={() => setToWeek(0)}
						>Aktuelle Woche</button
					>
					<button class="btn btn-primary btn-sm w-1/3" onclick={() => setToWeek(1)}
						>Nächste Woche</button
					>
				</div>
				<div class="flex flex-row gap-1 w-full">
					<button class="btn btn-primary btn-sm w-1/3" onclick={() => setToMonth(-1)}
						>Letzter Monat</button
					>
					<button class="btn btn-primary btn-sm w-1/3" onclick={() => setToMonth(0)}
						>Aktueller Monat</button
					>
					<button class="btn btn-primary btn-sm w-1/3" onclick={() => setToMonth(1)}
						>Nächster Monat</button
					>
				</div>
			</div>
			<div class="flex flex-row justify-end">
				<button class="btn btn-xs" onclick={reset}>Löschen</button>
			</div>
		</div>
	</div>
</Overlay>
