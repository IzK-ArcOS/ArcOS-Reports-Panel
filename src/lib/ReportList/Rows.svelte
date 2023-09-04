<script lang="ts">
  import type { ReportRecord } from "../../ts/reports/interface";
  import { Reports } from "../../ts/reports/main";
  import Row from "./Rows/Row.svelte";

  export let opened: boolean;
  export let minimal: boolean;
  export let data: ReportRecord[] = [];

  let reports: ReportRecord[] = [];

  Reports.subscribe((v) => {
    if (!v) return;

    reports = (data.length ? data : v).filter((r) =>
      opened ? !r.closed : true
    );
  });
</script>

{#if reports && reports.length}
  {#each reports as report}
    <Row {report} {minimal} />
  {/each}
{:else}
  <div class="none">Didn't find anything...</div>
{/if}
