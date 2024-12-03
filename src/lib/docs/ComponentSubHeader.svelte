<script lang="ts">
	let { title, description }: { title: string; description?: string } = $props();
</script>

<div class="flex flex-col gap-4 p-4 rounded bg-gray-200">
	<div class="text-xl tracking-wider">{title}</div>
	{#if description}
		<div>{description}</div>
	{/if}
</div>
