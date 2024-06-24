<script>
	import ComponentHeader from "$lib/docs/ComponentHeader.svelte";
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import DateTimeRangeInput from "$lib/form-inputs/date-time-range-input/DateTimeRangeInput.svelte";
</script>

<ComponentHeader
	title="Date Time Range Input"
	description="An input component where date ranges can be defined. In addition, to make life easier for customers, 9 presets are shown when clicking on the calendar icon."
/>
<ComponentPlayground title="Standard">
	<DateTimeRangeInput />
</ComponentPlayground>

<ComponentPlayground title="With default values">
	<DateTimeRangeInput from={1685599200000} to={1719220800000} />
</ComponentPlayground>
