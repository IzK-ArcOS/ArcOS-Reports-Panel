<script lang="ts">
  import { showOpened } from "../../../../../../ts/ui";
  import Loader from "../../../../../Loader.svelte";
  import ReportGroups from "../../../../../ReportGroups.svelte";
  import ReportList from "../../../../../ReportList.svelte";
  import Tabs from "./LatestReports/Tabs.svelte";

  let groupView = false;
  let loading = false;

  const toggle = () => (groupView = !groupView);
</script>

<div class="card latest-reports" class:groupView>
  <div class="actions">
    <Tabs bind:loading />
    <button class="material-icons-round mode" on:click={toggle}>
      {groupView ? "select_all" : "format_list_bulleted"}
    </button>
  </div>
  {#if !loading}
    {#if groupView}
      <ReportGroups bind:opened={$showOpened} />
    {:else}
      <ReportList minimal bind:opened={$showOpened} />
    {/if}
  {:else}
    <Loader>Populating...</Loader>
  {/if}
</div>
