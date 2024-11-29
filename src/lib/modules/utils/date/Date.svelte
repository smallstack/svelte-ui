<script lang="ts">
  import { format, parseISO } from "date-fns";

  let { timestamp }: { timestamp: number | Date | string } = $props();

  const convertedTimestamp: number = $derived.by(() => {
    if (typeof timestamp === "string") return parseISO(timestamp).getTime();
    if (timestamp instanceof Date) return timestamp.getTime();
    return timestamp;
  });

  const timestampAsString = $derived.by(() => {
    if (convertedTimestamp === undefined) return "";
    return format(convertedTimestamp, "dd.MM.yyyy HH:mm:ss");
  });
</script>

{timestampAsString}
