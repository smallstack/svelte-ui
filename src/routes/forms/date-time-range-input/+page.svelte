<script lang="ts">
	import ComponentHeader from "$lib/docs/ComponentHeader.svelte";
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import DateTimeRangeInput from "$lib/form-inputs/date-time-range-input/DateTimeRangeInput.svelte";

	let from: number;
	let to: number;
	let fromDefault = 1685599200000;
	let toDefault = 1719220800000;
</script>

<ComponentHeader
	title="Date Time Range Input"
	description="An input component where date ranges can be defined. In addition, to make life easier for customers, 9 presets are shown when clicking on the calendar icon."
/>
<ComponentPlayground title="Standard" value={{ from, to }}>
	<div class="max-w-md">
		<DateTimeRangeInput bind:from bind:to />
	</div>
</ComponentPlayground>

<ComponentPlayground title="With default values" value={{ from: fromDefault, to: toDefault }}>
	<div class="max-w-md">
		<DateTimeRangeInput bind:from={fromDefault} bind:to={toDefault} />
	</div>
</ComponentPlayground>
