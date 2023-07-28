<script lang="ts">
  import { onMount } from "svelte";
  import Content from "./Main/Content.svelte";
  import TopBar from "./Main/TopBar.svelte";
  import { GetReports, Reports } from "../ts/reports/main";

  onMount(async () => {
    Reports.set(await GetReports());
  });
</script>

<div class="main">
  <TopBar />
  <Content />
</div>
