<script lang="ts">
	let {
		title,
		description,
		level = "1"
	}: { title: string; description?: string; level?: string } = $props();
</script>

<div class="flex flex-col gap-4 mb-4 pt-4">
	<div class="tracking-wider level-{level}">{title}</div>
	{#if description}
		<div>{description}</div>
	{/if}
</div>

<style>
	.level-1 {
		font-size: 3rem;
		font-weight: 300;
	}

	.level-2 {
		font-size: 1.5rem;
		font-weight: 400;
		text-transform: uppercase;
		border-bottom: 8px solid #dde1e6;
	}

	.level-3 {
		font-size: 1rem;
		font-weight: 400;
	}
</style>
