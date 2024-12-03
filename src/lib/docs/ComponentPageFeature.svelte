<script lang="ts">
	import type { Snippet } from "svelte";

	let { title, description, children }: { title: string; description?: string; children: Snippet } =
		$props();
</script>

<div class="flex flex-col gap-4">
	<div class="p-2">{title}</div>
	{#if description}
		<div>{description}</div>
	{/if}
	<div class="p-4">
		{@render children()}
	</div>
</div>
