<script lang="ts">
  import { Dialog } from "../../../../../../ts/dialog/main";
  import type { Report } from "../../../../../../ts/reports/interface";
  import {
    archiveReport,
    deleteReport,
    resolveReport,
  } from "../../../../../../ts/reports/mutate";
  import { ViewerId } from "../../../../../../ts/ui";

  export let data: Report;

  function back() {
    ViewerId.set(null);
  }

  async function archive() {
    Dialog({
      title: "Confirm Archive?",
      message: "Are you really, really sure you want to archive this report?",
      buttons: [
        {
          caption: "Yeah, do it",
          action: async () => {
            await archiveReport(data.id);
          },
        },
        {
          caption: "Abort!",
          action: () => {},
        },
      ],
    });
  }

  async function resolve() {
    Dialog({
      title: "Confirm Resolve?",
      message: "Are you sure you want to resolve this report?",
      buttons: [
        {
          caption: "Yeah, resolve it",
          action: async () => {
            await resolveReport(data.id);
          },
        },
        {
          caption: "Abort!",
          action: () => {},
        },
      ],
    });
  }

  async function deleteIt() {
    Dialog({
      title: "Confirm Delete?",
      message:
        "Are you really, really REALLY sure you want to delete this report? This CANNOT be reverted.",
      buttons: [
        {
          caption: "Delete it",
          action: async () => {
            await deleteReport(data.id);
            ViewerId.set(null);
          },
        },
        {
          caption: "STOP!",
          action: () => {},
        },
      ],
    });
  }
</script>

<div class="actions">
  <button
    class="resolve"
    disabled={data.closed || data.resolved}
    on:click={resolve}
  >
    {data.closed && !data.resolved
      ? "Unresolved."
      : data.resolved
      ? "Resolved"
      : "Resolve"}
  </button>
  <button class="archive" disabled={data.closed} on:click={archive}>
    {data.closed ? "Archived" : "Archive"}
  </button>
  <button class="delete" on:click={deleteIt}>Delete</button>
  <button class="goback" on:click={back}>Go Back</button>
</div>
