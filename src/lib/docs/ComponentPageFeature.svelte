<script lang="ts">
	import type { Snippet } from "svelte";
	
	let { title, description, children }: { title: string; description?: string; children: Snippet } =
		$props();
</script>

<div class="card card-bordered card-compact bg-white">
	<div class="card-body">
		<div class="card-title">{title}</div>
		{#if description}
			<div class="card-subtitle">{description}</div>
		{/if}
		<div class="p-4">
			{@render children()}
		</div>
	</div>
</div>
