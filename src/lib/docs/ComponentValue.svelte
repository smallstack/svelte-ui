<script>
	let { value } = $props();
</script>

<div class="my-8 flex flex-col gap-2" data-test="component-value">
	<div class="text-lg">Value</div>
	<div class="p-5 rounded-box shadow-lg bg-white">
		<pre>{JSON.stringify(value, undefined, 2)}</pre>
	</div>
</div>
