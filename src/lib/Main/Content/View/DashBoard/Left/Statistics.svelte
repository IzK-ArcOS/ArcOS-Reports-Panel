<script lang="ts">
  import { Reports } from "../../../../../../ts/reports/main";
  import type { ReportStatistics } from "../../../../../../ts/reports/statistics/interface";
  import { getReportsStats } from "../../../../../../ts/reports/statistics/main";
  import Stat from "./Statistics/stat.svelte";

  let stats: ReportStatistics;

  Reports.subscribe(async (v) => {
    if (!v) return;
    stats = await getReportsStats(v);
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
