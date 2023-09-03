<script lang="ts">
  import type { Report } from "../../../../../../../ts/reports/interface";

  export let data: Report;
</script>

<div class="json">
  <div class="object">
    <h1>IMPORT META ENV</h1>
    <textarea
      spellcheck={false}
      readonly
      value={JSON.stringify(data.metaenv, null, 2)}
    />
  </div>
  <div class="object">
    <h1>WINDOW LOCATION</h1>
    <textarea
      spellcheck={false}
      readonly
      value={JSON.stringify(data.location, null, 2)}
    />
  </div>
</div>
