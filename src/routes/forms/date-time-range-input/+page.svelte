<script lang="ts">
	import ComponentPageHeader from "$lib/docs/ComponentPageHeader.svelte";
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import { DateTimeRangeInput } from "$lib/modules/forms";

	let from: number;
	let to: number;
	let fromDefault = 1685599200000;
	let toDefault = 1719220800000;
</script>

<ComponentPageHeader
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

<ComponentPlayground title="As Web Component">
	<div class="max-w-md">
		<iframe
			src="/wc-examples/date-time-range-input.html"
			width="600px"
			height="400px"
			title="Date Time Range Input as web component"
		></iframe>
	</div>
</ComponentPlayground>
