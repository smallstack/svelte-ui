<script lang="ts">
	import type { Snippet } from "svelte";
	import ComponentPageCard from "./ComponentPageCard.svelte";
	import ComponentPageHeader from "./ComponentPageHeader.svelte";

	let {
		title,
		description,
		demoComponent,
		features,
		props
	}: {
		title: string;
		description?: string;
		demoComponent?: Snippet;
		features?: Snippet;
		props?: Array<{
			name: string;
			type: string;
			default: string;
			description: string;
		}>;
	} = $props();
</script>

<div class="flex flex-col gap-4">
	<ComponentPageHeader {title} {description} />
	{#if demoComponent}
		<ComponentPageCard>
			{@render demoComponent()}
		</ComponentPageCard>
	{/if}
	{#if props}
		<ComponentPageHeader title="Props" level="2" />
		<ComponentPageCard>
			<table class="table table-zebra">
				<thead>
					<tr>
						<th>Option</th>
						<th>Type</th>
						<th>Default</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{#each props as prop}
						<tr>
							<td>{prop.name}</td>
							<td>{prop.type}</td>
							<td>{prop.default}</td>
							<td>{prop.description}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</ComponentPageCard>
	{/if}
	{#if features}
		<ComponentPageHeader title="Features" level="2" />
		{@render features()}
	{/if}
</div>
