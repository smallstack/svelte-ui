<script lang="ts">
	import ComponentCode from "$lib/docs/ComponentCode.svelte";
	import ComponentPageHeader from "$lib/docs/ComponentPageHeader.svelte";
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import Overlay from "$lib/modules/layout/overlay/Overlay.svelte";
</script>

<ComponentPageHeader
	title="Overlay"
	description="Overlay is a component that can be used to show a floating element on top of another element. It is useful for creating dropdowns, modals, popovers, etc."
/>

<ComponentPlayground>
	<div class="flex flex-row gap-4">
		<Overlay>
			<div slot="overlay" class="m-1 card card-bordered shadow-lg w-40 bg-white">
				<div class="card-body">
					<div class="text-center">Hello World</div>
				</div>
			</div>
			<button class="btn btn-primary" slot="trigger">Open bottom</button>
		</Overlay>
		<Overlay placement="right">
			<div slot="overlay" class="m-1 card card-bordered shadow-lg w-40 bg-white">
				<div class="card-body">
					<div class="text-center">Hello World</div>
				</div>
			</div>
			<button class="btn btn-primary" slot="trigger">Open right</button>
		</Overlay>
	</div>
</ComponentPlayground>
<ComponentCode>
	{`<Overlay>
	<div slot="overlay" class="m-1 card card-bordered shadow-lg w-40 bg-white">
		<div class="card-body">
			<div class="text-center">Hello World</div>
		</div>
	</div>
	<button class="btn btn-primary" slot="trigger">Open bottom</button>
</Overlay>
<Overlay placement="right">
	<div slot="overlay" class="m-1 card card-bordered shadow-lg w-40 bg-white">
		<div class="card-body">
			<div class="text-center">Hello World</div>
		</div>
	</div>
	<button class="btn btn-primary" slot="trigger">Open right</button>
</Overlay>`}
</ComponentCode>
