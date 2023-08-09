<script lang="ts">
  import { groupReports } from "../ts/reports/grouping";
  import type { ReportGroups, ReportRecord } from "../ts/reports/interface";
  import { Reports } from "../ts/reports/main";
  import ReportGroup from "./ReportGroups/ReportGroup.svelte";
  import HeaderRow from "./ReportList/HeaderRow.svelte";

  export let data: ReportRecord[] = [];

  let groups: ReportGroups = {};

  Reports.subscribe((v) => {
    v = v && v.length ? v : [];

    groups = groupReports(data.length ? data : v);
  });
</script>

<div class="reportview groups">
  <HeaderRow minimal />
  {#if groups}
    {#each Object.entries(groups) as entry}
      <ReportGroup reports={entry[1]} caption={entry[0]} />
    {/each}
  {/if}
</div>
