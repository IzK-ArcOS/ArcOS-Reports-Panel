<script lang="ts">
  import type { Report } from "../../../../../../../ts/reports/interface";
  import IssueNotice from "./Body/IssueNotice.svelte";

  let issued = false;

  export let data: Report;
</script>

<div class="viewer-body" class:issued>
  <IssueNotice report={data} bind:issued />
  <textarea class="body" spellcheck={false} readonly value={data.body} />
</div>
