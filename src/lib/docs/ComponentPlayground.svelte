<script lang="ts">
	let { title, value }: { title?: string; value?: any } = $props();
</script>

<div class="my-8 flex flex-col gap-2" data-test="component-playground-{title || 'default'}">
	{#if title}
		<div class="text-lg">{title}</div>
	{/if}
	<div class="rounded-box shadow-lg bg-white flex flex-row gap-2 justify-between text-black">
		<div class="p-5 relative w-full">
			<slot />
		</div>
		{#if value}
			<div class="bg-slate-200 text-black rounded-r-box p-2 min-w-64 relative">
				<div class="absolute -top-8 -left-0 text-xs bg-slate-200 p-2 rounded-t-box text-black">
					VALUE
				</div>
				<pre>{JSON.stringify(value, undefined, 2)}</pre>
			</div>
		{/if}
	</div>
</div>
