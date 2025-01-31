<script lang="ts">
	let { myInput = $bindable() }: { myInput?: string } = $props();
</script>

<input type="text" class="input input-bordered w-full" placeholder="Type anything" bind:value={myInput} />
