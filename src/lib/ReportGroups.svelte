<script lang="ts">
  import { groupReports } from "../ts/reports/grouping";
  import type { ReportGroups, ReportRecord } from "../ts/reports/interface";
  import { Reports } from "../ts/reports/main";
  import { groupName } from "../ts/ui";
  import GroupHeader from "./ReportGroups/GroupHeader.svelte";
  import ReportGroup from "./ReportGroups/ReportGroup.svelte";
  import ReportList from "./ReportList.svelte";

  export let data: ReportRecord[] = [];
  export let opened: boolean;

  let groups: ReportGroups = {};
  let filtered: ReportRecord[] = [];

  groupName.subscribe((v) => {
    const reports = data && data.length ? data : $Reports;

    if (!v) return (filtered = reports);

    filtered = reports.filter((r) => r.title == v);
  });

  Reports.subscribe((v) => {
    v = v && v.length ? v : [];

    groups = groupReports(data.length ? data : v, opened);
  });
</script>

<div class="reportview groups">
  <GroupHeader reports={filtered.length} />
  {#if !$groupName}
    {#each Object.entries(groups) as entry}
      <ReportGroup caption={entry[0]} count={entry[1].length} />
    {/each}
    {#if !Object.entries(groups).length}
      <div class="none">Didn't find anything...</div>
    {/if}
  {:else}
    <ReportList data={filtered} minimal bind:opened />
  {/if}
</div>
