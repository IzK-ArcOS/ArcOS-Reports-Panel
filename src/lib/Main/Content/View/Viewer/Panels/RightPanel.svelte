<script lang="ts">
  import type { Report } from "../../../../../../ts/reports/interface";
  import JsonView from "./RightPanel/JsonView.svelte";
  import Log from "./RightPanel/Log.svelte";

  export let data: Report;
</script>

<div class="rightpanel">
  <JsonView {data} />
  <Log {data} />
</div>
