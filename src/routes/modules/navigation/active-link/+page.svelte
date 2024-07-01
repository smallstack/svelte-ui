<script lang="ts">
	import ComponentCode from "$lib/docs/ComponentCode.svelte";
import ComponentHeader from "$lib/docs/ComponentHeader.svelte";
	import { isActiveLink } from "$lib/index.js";
</script>

<ComponentHeader
	title="Active Link"
	description="Sets a given css class when the current <a> element's href matches the current route. It is being used by all navigation bar components of Svelte UI."
></ComponentHeader>


<ComponentCode>
    &lt;a href=&quot;/&quot; use:isActiveLink(&#39;active-class&#39;)&gt;&lt;/a&gt;
</ComponentCode>