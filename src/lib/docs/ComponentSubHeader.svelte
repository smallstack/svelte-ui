<script lang="ts">
	let { title, description }: { title: string; description?: string } = $props();
</script>

<div class="flex flex-col gap-4 mt-8">
	<div class="text-xl font-semibold tracking-wider">{title}</div>
	<div>{description}</div>
</div>
