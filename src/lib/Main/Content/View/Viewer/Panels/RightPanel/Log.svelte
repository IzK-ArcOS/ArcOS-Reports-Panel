<script lang="ts">
  import type { Report } from "../../../../../../../ts/reports/interface";

  export let data: Report;
</script>

{#if data && data.log}
  <div class="log">
    <h1>
      <span>SYSTEM LOG</span>
      <span class="right">{data.log.split("\n").length} items</span>
    </h1>
    <textarea spellcheck={false} readonly value={data.log} />
  </div>
{/if}
