<script lang="ts">
	import ComponentHeader from "$lib/docs/ComponentHeader.svelte";
	import ComponentInstall from "$lib/docs/ComponentInstall.svelte";
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import Input from "$lib/form-inputs/Input.svelte";
</script>

<ComponentHeader title="Input" description="Input field with label, placeholder and error " />

<ComponentInstall>
    <span class="text-primary">npm install svelte-ui-forms</span>
</ComponentInstall>

<ComponentPlayground>
	<Input label="Name" placeholder="Enter your name" error="Name is required" value="Max" />
</ComponentPlayground>
