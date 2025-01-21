<script lang="ts">
	import ComponentCode from "$lib/docs/ComponentCode.svelte";
	import ComponentPageHeader from "$lib/docs/ComponentPageHeader.svelte";
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import { StringInput } from "$lib/modules/forms";
	import SignaturePadInput from "$lib/modules/forms/form-inputs/signature-pad/SignaturePadInput.svelte";

	let signature = $state("");
</script>

<ComponentPageHeader
	title="Signature Pad"
	description="Shows an area where users can sign by freehand"
/>

<ComponentPlayground>
	<SignaturePadInput bind:signature></SignaturePadInput>
</ComponentPlayground>

<ComponentPageHeader title="Signature as image" level="2"></ComponentPageHeader>
<ComponentCode>
	<img src={signature} alt="Signature" class="w-full" />
</ComponentCode>

<ComponentPageHeader title="Signature as Base64" level="2"></ComponentPageHeader>
<ComponentCode>
	<div class="w-full overflow-hidden break-all">
		{signature}
	</div>
</ComponentCode>
