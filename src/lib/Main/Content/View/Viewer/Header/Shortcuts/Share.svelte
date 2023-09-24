<script lang="ts">
  import { Dialog } from "../../../../../../../ts/dialog/main";
  import type { Report } from "../../../../../../../ts/reports/interface";

  export let data: Report;

  function copyIt() {
    Dialog({
      title: "Copy Report...",
      message: `Please be so kind to choose how to copy Bug Report ${data.id} to your clipboard. Click Cancel to leave the clipboard untouched.`,
      buttons: [
        {
          caption: "MD",
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
          caption: "IsID",
          action() {
            navigator.clipboard.writeText(data.issueid);
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
</script>

<button class="copy material-icons-round" on:click={copyIt} title="Copy...">
  share
</button>
