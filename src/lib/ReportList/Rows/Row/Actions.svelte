<script lang="ts">
  import { Dialog } from "../../../../ts/dialog/main";
  import { pb } from "../../../../ts/pb/main";
  import type { ReportRecord } from "../../../../ts/reports/interface";
  import { deleteReport } from "../../../../ts/reports/mutate";
  import Segment from "./Segment.svelte";

  export let report: ReportRecord;

  function open() {
    console.log(report);
  }

  async function toggleResolved() {
    await pb
      .collection("bugrep")
      .update(report.id, { resolved: !report.resolved });
  }

  async function toggleClosed() {
    await pb.collection("bugrep").update(report.id, { closed: !report.closed });
  }

  async function deleteRep() {
    Dialog({
      title: "Confirm deletion",
      message: `You are about to delete report ${report.id}. All data within this report will no longer be accessible by anyone, not even the author. This action cannot be reverted. Are you sure?`,
      buttons: [
        {
          caption: "Delete",
          async action() {
            await deleteReport(report.id);
          },
        },
        { caption: "Cancel", action() {} },
      ],
    });
  }
</script>

<Segment nomask small c="act">
  <button class="link" on:click={open}>Open</button>
  <button
    class="material-icons-round"
    class:resolved={report.resolved}
    on:click={toggleResolved}
    title="Resolved?"
  >
    check
  </button>
  <button
    class="material-icons-round"
    class:closed={report.closed}
    on:click={toggleClosed}
    title="Closed?"
  >
    close
  </button>
  <button class="material-icons-round" on:click={deleteRep} title="DELETE IT!">
    delete
  </button>
</Segment>
