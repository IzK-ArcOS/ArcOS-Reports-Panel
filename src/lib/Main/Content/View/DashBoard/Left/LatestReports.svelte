<script lang="ts">
  import { Reports } from "../../../../../../ts/reports/main";
  import sleep from "../../../../../../ts/sleep";
  import { showOpened } from "../../../../../../ts/ui";
  import ReportGroups from "../../../../../ReportGroups.svelte";
  import ReportList from "../../../../../ReportList.svelte";

  let groupView = false;
  let loading = false;

  const toggle = () => (groupView = !groupView);

  async function toggleMode(mode: boolean) {
    $showOpened = mode;
    loading = true;

    await sleep(0);

    loading = false;
  }

  Reports.subscribe((v) => {
    if (!v) return;
  });
</script>

<div class="card latest-reports" class:groupView>
  <div class="actions">
    <div class="tabs">
      <button
        class="tab"
        class:selected={$showOpened}
        on:click={() => toggleMode(true)}
      >
        Opened
      </button>
      <button
        class="tab"
        class:selected={!$showOpened}
        on:click={() => toggleMode(false)}
      >
        All
      </button>
    </div>
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
    Populating...
  {/if}
</div>
