<script lang="ts">
	import ComponentPageHeader from "$lib/docs/ComponentPageHeader.svelte";
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import { StringInput } from "$lib/modules/forms";
</script>

<ComponentPageHeader title="Input" description="Input field with label, placeholder and error " />

<ComponentPlayground>
	<StringInput label="Name" placeholder="Enter your name"  value="Max" />
</ComponentPlayground>
