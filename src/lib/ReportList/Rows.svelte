<script lang="ts">
  import type { ReportRecord } from "../../ts/reports/interface";
  import { Reports } from "../../ts/reports/main";
  import Row from "./Rows/Row.svelte";

  export let opened: boolean;

  let reports: ReportRecord[] = [];

  Reports.subscribe((v) => {
    if (!v) return;

    reports = opened ? v.filter((r) => !r.closed) : v;
  });
</script>

{#if reports}
  {#each reports as report}
    <Row {report} />
  {/each}
{/if}
