<script lang="ts">
	let { title, description }: { title: string; description?: string } = $props();
</script>

<div class="flex flex-col gap-4 mb-8">
	<div class="text-4xl uppercase">{title}</div>
	<div>{description}</div>
</div>
