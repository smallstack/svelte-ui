<script>
	import DataView from "$lib/modules/data/DataView.svelte";

	let mode = "auto";
</script>

<div class="flex flex-col gap-4">
	<div>Table Mode</div>
	<div>
		<select class="select select-primary select-bordered" bind:value={mode}>
			<option value="auto">Auto (Breakpoint based)</option>
			<option value="table">Table</option>
			<option value="grid">Grid</option>
		</select>
	</div>

	<DataView {mode}></DataView>
</div>
