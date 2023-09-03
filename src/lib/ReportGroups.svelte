<script lang="ts">
  import { writable } from "svelte/store";
  import { groupReports } from "../ts/reports/grouping";
  import type { ReportGroups, ReportRecord } from "../ts/reports/interface";
  import { Reports } from "../ts/reports/main";
  import GroupHeader from "./ReportGroups/GroupHeader.svelte";
  import ReportGroup from "./ReportGroups/ReportGroup.svelte";
  import ReportList from "./ReportList.svelte";

  export let data: ReportRecord[] = [];

  let viewing = writable<string>("");
  let groups: ReportGroups = {};
  let filtered: ReportRecord[] = [];

  viewing.subscribe((v) => {
    const reports = data && data.length ? data : $Reports;

    if (!v) return (filtered = reports);

    filtered = reports.filter((r) => r.title == v);
  });

  Reports.subscribe((v) => {
    v = v && v.length ? v : [];

    groups = groupReports(data.length ? data : v);
  });
</script>

<div class="reportview groups">
  <GroupHeader bind:viewing reports={filtered.length} />
  {#if !$viewing}
    {#each Object.entries(groups) as entry}
      <ReportGroup caption={entry[0]} bind:viewing count={entry[1].length} />
    {/each}
  {:else}
    <ReportList data={filtered} minimal />
  {/if}
</div>
