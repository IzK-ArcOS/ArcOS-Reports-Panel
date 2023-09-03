<script lang="ts">
  import type { Report } from "../../../../../../../ts/reports/interface";

  export let data: Report;
</script>

<div class="viewer-body">
  <textarea class="body" spellcheck={false} readonly>
    {data.body}
  </textarea>
</div>
