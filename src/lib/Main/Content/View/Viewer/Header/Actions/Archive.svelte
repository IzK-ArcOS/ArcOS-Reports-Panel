<script lang="ts">
  import { Dialog } from "../../../../../../../ts/dialog/main";
  import type { Report } from "../../../../../../../ts/reports/interface";
  import {
    archiveReport,
    unArchive,
  } from "../../../../../../../ts/reports/mutate";
  import { ViewerId } from "../../../../../../../ts/ui";

  let loading = false;
  export let data: Report;

  async function archive() {
    loading = true;
    Dialog({
      title: data.closed ? "Confirm Unarchive?" : "Confirm Archive?",
      message: data.closed
        ? "Are you sure you want to unarchive this report?"
        : "Are you sure you want to close the viewer and archive this report?",
      buttons: [
        {
          caption: "Continue",
          action: async () => {
            if (data.closed) {
              await unArchive(data.id);
              loading = false;

              return;
            }

            await archiveReport(data.id);
            loading = false;
            ViewerId.set(null);
          },
        },
        {
          caption: "Abort!",
          action: () => {
            loading = false;
          },
        },
      ],
    });
  }
</script>

<button class="archive" on:click={archive} class:revert={data.closed}>
  {#if !loading}
    {data.closed ? "Unarchive" : "Archive"}
  {:else}
    <div class="spinner tiny" />
  {/if}
</button>
