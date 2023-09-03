<script lang="ts">
  import { Dialog } from "../../../../../../../ts/dialog/main";
  import type { Report } from "../../../../../../../ts/reports/interface";
  import { resolveReport } from "../../../../../../../ts/reports/mutate";

  let loading = false;
  export let data: Report;

  async function resolve() {
    loading = true;
    Dialog({
      title: "Confirm Resolve?",
      message: "Are you sure you want to resolve this report?",
      buttons: [
        {
          caption: "Yeah, resolve it",
          action: async () => {
            await resolveReport(data.id);
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
    <div class="spinner" />
  {/if}
</button>
