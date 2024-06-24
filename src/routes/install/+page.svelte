<script lang="ts">
	import ComponentCode from "$lib/docs/ComponentCode.svelte";
	import ComponentHeader from "$lib/docs/ComponentHeader.svelte";
	import ComponentSubHeader from "$lib/docs/ComponentSubHeader.svelte";
</script>

<ComponentHeader
	title="Getting Started"
	description="There are multiple ways to install Svelte UI. You can either use a package manager or include the components as web components.
"
/>

<div class="flex flex-col gap-4">
	<ComponentSubHeader title="Via Package Manager"></ComponentSubHeader>
	<div role="tablist" class="tabs tabs-lifted mb-4">
		<input type="radio" name="install-npm-tabs" role="tab" class="tab" aria-label="NPM" checked />
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
			<pre>npm install @smallstack/svelte-ui</pre>
		</div>

		<input type="radio" name="install-npm-tabs" role="tab" class="tab" aria-label="YARN" />
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
			<pre>yarn add @smallstack/svelte-ui</pre>
		</div>

		<input type="radio" name="install-npm-tabs" role="tab" class="tab" aria-label="PNPM" />
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
			<pre>pnpm add @smallstack/svelte-ui</pre>
		</div>
	</div>

	<ComponentSubHeader
		title="As Web Components"
		description="It heavily depends on the target framework how to use web components. Here are some exemplarily implementations."
	></ComponentSubHeader>
	<div role="tablist" class="tabs tabs-lifted mb-4">
		<input
			type="radio"
			name="install-wc-tabs"
			role="tab"
			class="tab"
			aria-label="Vanilla"
			checked
		/>
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
			<pre>&lt;script type=&quot;module&quot; src=&quot;https://cdn.skypack.dev/@smallstack/svelte-ui&quot;&gt;&lt;/script&gt;
&lt;sui-table&gt;&lt;/sui-table&gt;
			</pre>
		</div>
		<input type="radio" name="install-wc-tabs" role="tab" class="tab" aria-label="Angular" />
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
			<pre>TBD</pre>
		</div>
		<input type="radio" name="install-wc-tabs" role="tab" class="tab" aria-label="React" />
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
			<pre>TBD</pre>
		</div>
		<input type="radio" name="install-wc-tabs" role="tab" class="tab" aria-label="Vue" />
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
			<pre>TBD</pre>
		</div>
	</div>
</div>
