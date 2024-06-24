<script lang="ts">
	let { title }: { title?: string } = $props();
</script>

<div class="my-8 flex flex-col gap-2" data-test="component-playground-{title || 'default'}">
	{#if title}
		<div class="text-lg">{title}</div>
	{/if}
	<div class="p-5 rounded-box shadow-lg bg-white">
		<slot />
	</div>
</div>
