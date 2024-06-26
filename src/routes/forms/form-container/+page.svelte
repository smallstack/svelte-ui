<script lang="ts">
	import ComponentCode from "$lib/docs/ComponentCode.svelte";
	import ComponentHeader from "$lib/docs/ComponentHeader.svelte";
	import ComponentPlayground from "$lib/docs/ComponentPlayground.svelte";
	import Form from "$lib/forms/Form.svelte";
	import FormField from "$lib/forms/FormField.svelte";
	import type { JSONSchema7 } from "json-schema";

	const schema: JSONSchema7 = {
		type: "object",
		properties: {
			firstName: {
				type: "string",
				title: "firstName"
			}
		}
	};

	let formValue = $state({ firstName: "Max" });
</script>

<ComponentHeader
	title="Form Container"
	description="The Form Container wraps Form Input Components and handles the form value."
/>

<ComponentPlayground value={formValue}>
	<Form {schema} bind:value={formValue}>
		<FormField path="firstName" />
		<FormField path="lastName" />
	</Form>
</ComponentPlayground>
