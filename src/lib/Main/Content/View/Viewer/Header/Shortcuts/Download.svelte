<script lang="ts">
  import { downloadText } from "../../../../../../../ts/download";
  import type { Report } from "../../../../../../../ts/reports/interface";

  export let data: Report;

  function downloadReport() {
    downloadText(`BugRep-${data.id}.json`, JSON.stringify(data, null, 2));
  }
</script>

<button
  class="copy material-icons-round"
  on:click={downloadReport}
  title="Download Full Report"
>
  download
</button>
