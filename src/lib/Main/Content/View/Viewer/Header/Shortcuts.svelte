<script lang="ts">
  import { Dialog } from "../../../../../../ts/dialog/main";
  import { downloadText } from "../../../../../../ts/download";
  import type { Report } from "../../../../../../ts/reports/interface";

  export let data: Report;

  function copyIt() {
    Dialog({
      title: "Copy Report...",
      message: `Please be so kind to choose how to copy Bug Report ${data.id} to your clipboard. Click Cancel to leave the clipboard untouched.`,
      buttons: [
        {
          caption: "Mark Down",
          action() {
            navigator.clipboard.writeText(
              `[\`${data.id}\`](<https://bugrep.arcapi.nl/?rid=${data.id}>)`
            );
          },
        },
        {
          caption: "URL",
          action() {
            navigator.clipboard.writeText(
              `https://bugrep.arcapi.nl/?rid=${data.id}`
            );
          },
        },
        {
          caption: "ID",
          action() {
            navigator.clipboard.writeText(data.id);
          },
        },
        { caption: "Cancel", action() {} },
      ],
    });
  }

  function downloadReport() {
    downloadText(`BugRep-${data.id}.json`, JSON.stringify(data, null, 2));
  }

  function userdata() {
    const blob = new Blob([JSON.stringify(data.userdata, null, 2)], {
      type: "application/json",
    });

    window.open(URL.createObjectURL(blob), "_blank");
  }
</script>

<button class="copy material-icons-round" on:click={copyIt} title="Copy...">
  share
</button>
<button
  class="copy material-icons-round"
  on:click={downloadReport}
  title="Download Full Report"
>
  download
</button>
<button
  class="copy material-icons-round"
  on:click={userdata}
  disabled={!data.userdata}
  title="View UserData in new tab"
>
  account_tree
</button>
