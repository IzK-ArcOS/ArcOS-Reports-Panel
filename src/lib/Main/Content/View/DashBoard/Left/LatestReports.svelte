<script>
  import { groupReports } from "../../../../../../ts/reports/grouping";
  import { Reports } from "../../../../../../ts/reports/main";
  import ReportGroups from "../../../../../ReportGroups.svelte";
  import ReportList from "../../../../../ReportList.svelte";

  Reports.subscribe((v) => {
    if (!v) return;

    console.dir(groupReports(v));
  });
</script>

<div class="card latest-reports">
  <!-- <reportview list opened minimal /> -->
  <ReportGroups opened />
</div>
