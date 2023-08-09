<script lang="ts">
  import type { ReportRecord } from "../ts/reports/interface";
  import HeaderRow from "./ReportList/HeaderRow.svelte";
  import Rows from "./ReportList/Rows.svelte";

  export let opened = false;
  export let minimal = false;
  export let nohead = false;
  export let data: ReportRecord[] = [];
</script>

<div class="reportview list">
  {#if !nohead}
    <HeaderRow {minimal} />
  {/if}
  <Rows {opened} {minimal} {data} />
</div>
