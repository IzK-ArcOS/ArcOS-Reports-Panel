<script lang="ts">
  import { onMount } from "svelte";
  import { GetReports, Reports } from "../../ts/reports/main";
  import View from "./Content/View.svelte";

  onMount(async () => {
    Reports.set(await GetReports());
  });
</script>

<div class="content">
  <View />
</div>
