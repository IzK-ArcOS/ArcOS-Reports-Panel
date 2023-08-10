<script lang="ts">
  import type { ReportRecord } from "../../ts/reports/interface";
  import ReportList from "../ReportList.svelte";

  export let reports: ReportRecord[];
  export let caption: string;
  export let expanded: string;
  export let opened = false;

  function expand() {
    expanded = expanded == caption ? "" : caption;
  }
</script>

{#if reports && reports.length && caption}
  <div class="reportgroup" class:expanded={expanded == caption}>
    <button class="expander" on:click={expand}>
      <span>{caption} ({reports.length})</span>
    </button>
    <ReportList nohead minimal data={reports} {opened} />
  </div>
{/if}
