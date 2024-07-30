<script lang="ts">
	import ComponentCode from "$lib/docs/ComponentCode.svelte";
	import ComponentHeader from "$lib/docs/ComponentHeader.svelte";
</script>

<ComponentHeader
	title="Active Link"
	description="Sets a given css class when the current <a> element's href matches the current route. It is being used by all navigation bar components of Svelte UI."
></ComponentHeader>

<ComponentCode>
	{`<a href="/users" use:isActiveLink({ activeClass: "active-class" })></a>`}
</ComponentCode>

<ComponentCode>
	{`<a href="/users?filter=active" use:isActiveLink({ activeClass: "active-class", includeQueryParams: true })></a>`}
</ComponentCode>
