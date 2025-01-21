<script lang="ts">
	let {
		label,
		placeholder,
		value = $bindable(""),
		error = undefined
	}: {
		label: string;
		placeholder: string;
		value: string;
		error?: string;
	} = $props();
</script>

<label class="form-control w-full">
	{#if label}
		<div class="label">
			<span class="label-text">{label}</span>
		</div>
	{/if}
	<input type="text" {placeholder} class="input input-bordered bg-white w-full" bind:value />
	{#if error}
		<div class="label">
			<span class="label-text-alt text-error">{error}</span>
		</div>
	{/if}
</label>
