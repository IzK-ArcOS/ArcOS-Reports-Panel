<script lang="ts">
  import { Dialog } from "../../../../../../../ts/dialog/main";
  import type { Report } from "../../../../../../../ts/reports/interface";
  import {
    archiveReport,
    deleteReport,
  } from "../../../../../../../ts/reports/mutate";
  import { ViewerId } from "../../../../../../../ts/ui";

  let loading = false;
  export let data: Report;

  async function deleteIt() {
    loading = true;

    Dialog({
      title: "Confirm Delete?",
      message:
        "Are you really, really REALLY sure you want to delete this report? It may be a smarter option to simply archive it as this action CANNOT be reverted.",
      buttons: [
        {
          caption: "Delete it",
          action: async () => {
            await deleteReport(data.id);

            ViewerId.set(null);

            loading = false;
          },
        },
        {
          caption: "Archive",
          action: async () => {
            await archiveReport(data.id);

            ViewerId.set(null);

            loading = false;
          },
        },
        {
          caption: "STOP!",
          action: () => {
            loading = false;
          },
        },
      ],
    });
  }
</script>

<button class="delete" on:click={deleteIt}>
  {#if !loading}
    Delete
  {:else}
    <div class="spinner tiny" />
  {/if}
</button>
