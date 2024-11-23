<script lang="ts">
	let { selectColor }: { selectColor: (color: string) => void } = $props();
</script>

I am yet another component that shows, how props can be used!

<div class="flex flex-row gap-2">
	<button class="btn btn-error" onclick={() => selectColor("red")}>Choose red</button>
	<button class="btn btn-success" onclick={() => selectColor("green")}>Choose green</button>
</div>
