<script lang="ts">
  import { onMount } from "svelte";
  import { GetReports, Reports } from "../../ts/reports/main";
  import { startLiveUptime } from "../../ts/uptime/main";
  import View from "./Content/View.svelte";

  onMount(async () => {
    Reports.set(await GetReports());
    startLiveUptime();
  });
</script>

<div class="content">
  <View />
</div>
