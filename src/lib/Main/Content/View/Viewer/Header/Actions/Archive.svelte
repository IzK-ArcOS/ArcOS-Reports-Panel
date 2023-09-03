<script lang="ts">
  import { Dialog } from "../../../../../../../ts/dialog/main";
  import type { Report } from "../../../../../../../ts/reports/interface";
  import { archiveReport } from "../../../../../../../ts/reports/mutate";

  let loading = false;
  export let data: Report;

  async function archive() {
    loading = true;
    Dialog({
      title: "Confirm Archive?",
      message: "Are you really, really sure you want to archive this report?",
      buttons: [
        {
          caption: "Yeah, do it",
          action: async () => {
            await archiveReport(data.id);
            loading = false;
          },
        },
        {
          caption: "Abort!",
          action: () => {},
        },
      ],
    });
  }
</script>

<button class="archive" disabled={data.closed} on:click={archive}>
  {#if !loading}
    {data.closed ? "Archived" : "Archive"}
  {:else}
    <div class="spinner" />
  {/if}
</button>
