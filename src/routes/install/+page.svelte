<script lang="ts">
	import ComponentPageHeader from "$lib/docs/ComponentPageHeader.svelte";

	let selectedTab = "Vanilla";
</script>

<ComponentPageHeader
	title="Getting Started"
	description="There are multiple ways to install Svelte UI. You can either use a package manager or include the components as web components.
"
/>

<div class="flex flex-col gap-4">
	<ComponentPageHeader title="Via Package Manager" level="2"></ComponentPageHeader>
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

	<ComponentPageHeader
		title="As Web Components"
		description="It heavily depends on the target framework how to use web components. Here are some exemplarily implementations."
		level="2"
	></ComponentPageHeader>
	<div role="tablist" class="tabs tabs-lifted mb-4">
		<input
			type="radio"
			name="install-wc-tabs"
			role="tab"
			class="tab"
			aria-label="Vanilla"
			checked
			onchange={() => (selectedTab = "Vanilla")}
		/>
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
			<pre>&lt;script type=&quot;module&quot; src=&quot;https://cdn.skypack.dev/@smallstack/svelte-ui&quot;&gt;&lt;/script&gt;
&lt;sui-table&gt;&lt;/sui-table&gt;
			</pre>
		</div>
		<input
			type="radio"
			name="install-wc-tabs"
			role="tab"
			class="tab"
			aria-label="Angular"
			onchange={() => (selectedTab = "Angular")}
		/>
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
			{#if selectedTab === "Angular"}
				<iframe
					src="https://stackblitz.com/edit/sui-message-thread-wc-angular?file=src%2Fmain.ts"
					width="100%"
					height="600px"
					title="Chat Window as a custom element"
				></iframe>
			{/if}
		</div>
		<input
			type="radio"
			name="install-wc-tabs"
			role="tab"
			class="tab"
			aria-label="React"
			onchange={() => (selectedTab = "React")}
		/>
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
			{#if selectedTab === "React"}
				<iframe
					src="https://stackblitz.com/edit/sui-message-thread-wc-react?file=src%2FApp.jsx"
					width="100%"
					height="600px"
					title="Chat Window as a custom element"
				></iframe>
			{/if}
		</div>
		<input
			type="radio"
			name="install-wc-tabs"
			role="tab"
			class="tab"
			aria-label="Vue"
			onchange={() => (selectedTab = "Vue")}
		/>
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
			<pre>TBD</pre>
		</div>
	</div>

	<ComponentPageHeader title="Tailwind Setup" level="2"></ComponentPageHeader>

	To use the components with Tailwind CSS, you obviously need to have Tailwind CSS installed. Since
	svelte (and sveltekit) strip out unused CSS, you need to add the following to your
	tailwind.config.js content array: <br />
	<pre>{`"node_modules/@smallstack/svelte-ui/dist/**/*.{html,svelte,js,ts}"`}</pre>
</div>
