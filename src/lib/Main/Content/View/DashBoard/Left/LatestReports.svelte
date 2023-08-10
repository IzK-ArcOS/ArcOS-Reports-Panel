<script>
  import { Reports } from "../../../../../../ts/reports/main";
  import ReportGroups from "../../../../../ReportGroups.svelte";
  import ReportList from "../../../../../ReportList.svelte";

  let groupView = false;

  const toggle = () => (groupView = !groupView);

  Reports.subscribe((v) => {
    if (!v) return;
  });
</script>

<div class="card latest-reports" class:groupView>
  <button class="material-icons-round mode" on:click={toggle}>
    {groupView ? "select_all" : "format_list_bulleted"}
  </button>
  {#if groupView}
    <ReportGroups />
  {:else}
    <ReportList minimal opened />
  {/if}
</div>
