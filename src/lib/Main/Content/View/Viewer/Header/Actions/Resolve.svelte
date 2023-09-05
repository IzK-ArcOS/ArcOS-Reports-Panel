<script lang="ts">
  import { Dialog } from "../../../../../../../ts/dialog/main";
  import type { Report } from "../../../../../../../ts/reports/interface";
  import {
    resolveReport,
    unResolve,
  } from "../../../../../../../ts/reports/mutate";
  import { ViewerId } from "../../../../../../../ts/ui";

  let loading = false;
  export let data: Report;

  async function resolve() {
    loading = true;
    Dialog({
      title: data.resolved ? "Confirm Reopen?" : "Confirm Resolve?",
      message: data.resolved
        ? "Are you sure you want to reopen this report?"
        : "Are you sure you want to close the viewer and resolve this report?",
      buttons: [
        {
          caption: "Continue",
          action: async () => {
            if (data.resolved) {
              await unResolve(data.id);
              loading = false;

              return;
            }

            await resolveReport(data.id);
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

<button class="resolve" on:click={resolve} class:revert={data.resolved}>
  {#if !loading}
    {data.resolved ? "Reopen" : "Resolve"}
  {:else}
    <div class="spinner tiny" />
  {/if}
</button>
