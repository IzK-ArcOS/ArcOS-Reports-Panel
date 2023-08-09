<script lang="ts">
  import type { ReportRecord } from "../../ts/reports/interface";
  import ReportList from "../ReportList.svelte";

  export let reports: ReportRecord[];
  export let caption: string;

  let expanded = false;

  function expand() {
    expanded = !expanded;
  }
</script>

{#if reports && reports.length && caption}
  <div class="reportgroup" class:expanded>
    <button class="expander" on:click={expand}>{caption}</button>
    <ReportList nohead minimal data={reports} />
  </div>
{/if}
