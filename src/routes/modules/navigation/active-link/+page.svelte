<script lang="ts">
	import ComponentCode from "$lib/docs/ComponentCode.svelte";
	import ComponentPageHeader from "$lib/docs/ComponentPageHeader.svelte";
</script>

<ComponentPageHeader
	title="Active Link"
	description="Sets a given css class when the current <a> element's href matches the current route. It is being used by all navigation bar components of Svelte UI."
></ComponentPageHeader>

<ComponentCode>
	{`<a href="/users" use:isActiveLink({ activeClass: "active-class" })></a>`}
</ComponentCode>

<ComponentCode>
	{`<a href="/users?filter=active" use:isActiveLink({ activeClass: "active-class", includeQueryParams: true })></a>`}
</ComponentCode>
