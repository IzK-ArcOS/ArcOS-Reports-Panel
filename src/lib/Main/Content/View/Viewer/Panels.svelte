<script lang="ts">
  import type { Report } from "../../../../../ts/reports/interface";
  import LeftPanel from "./Panels/LeftPanel.svelte";
  import RightPanel from "./Panels/RightPanel.svelte";

  export let data: Report;
</script>

<div class="panels">
  <LeftPanel {data} />
  <RightPanel {data} />
</div>
