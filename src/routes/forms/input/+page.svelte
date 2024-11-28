<script lang="ts">
	import ComponentCode from "$lib/docs/ComponentCode.svelte";
	import ComponentHeader from "$lib/docs/ComponentHeader.svelte";
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import { StringInput } from "$lib/modules/forms";
</script>

<ComponentHeader title="Input" description="Input field with label, placeholder and error " />

<ComponentCode>
	<span class="text-primary">npm install svelte-ui-forms</span>
</ComponentCode>

<ComponentPlayground>
	<StringInput label="Name" placeholder="Enter your name" error="Name is required" value="Max" />
</ComponentPlayground>
