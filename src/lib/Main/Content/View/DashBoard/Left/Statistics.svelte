<script lang="ts">
  import { onMount } from "svelte";
  import { getReportsStats } from "../../../../../../ts/reports/statistics/main";
  import Stat from "./Statistics/stat.svelte";
  import type { ReportStatistics } from "../../../../../../ts/reports/statistics/interface";
  import { Reports } from "../../../../../../ts/reports/main";

  let stats: ReportStatistics;

  Reports.subscribe(async () => {
    stats = await getReportsStats();
  });
</script>

{#if stats}
  <div class="card statistics">
    <Stat title="Opened">{stats.opened}</Stat>
    <Stat title="Closed">{stats.closed}</Stat>
    <Stat title="Total">{stats.total}</Stat>
    <Stat title="Resolved">{stats.resolved}</Stat>
    <Stat title="Servers">{stats.apis}</Stat>
  </div>
{/if}
