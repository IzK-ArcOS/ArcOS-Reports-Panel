<script lang="ts">
  import { Dialog } from "../../../../../../../ts/dialog/main";
  import type { Report } from "../../../../../../../ts/reports/interface";
  import { resolveReport } from "../../../../../../../ts/reports/mutate";
  import { ViewerId } from "../../../../../../../ts/ui";

  let loading = false;
  export let data: Report;

  async function resolve() {
    loading = true;
    Dialog({
      title: "Confirm Resolve?",
      message:
        "Are you sure you want to close the viewer and resolve this report?",
      buttons: [
        {
          caption: "Yeah, resolve it",
          action: async () => {
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

<button
  class="resolve"
  disabled={data.closed || data.resolved}
  on:click={resolve}
>
  {#if !loading}
    {data.closed && !data.resolved
      ? "Unresolved."
      : data.resolved
      ? "Resolved"
      : "Resolve"}
  {:else}
    <div class="spinner tiny" />
  {/if}
</button>
