<script lang="ts">
  import type { Snippet } from "svelte"; 

  let { key, value, children }: { key: string; value?: string; children?: Snippet } = $props();
</script>

<div class="flex flex-row place-items-center justify-between">
  <div class="flex flex-col">
    <div class="text font-semibold">{key}</div>
    {#if value !== undefined}
      <div class="text-sm">{value}</div>
    {:else if children}
      {@render children()}
    {:else}
      <div class="text-sm text-base-300">-</div>
    {/if}
  </div>
</div>
