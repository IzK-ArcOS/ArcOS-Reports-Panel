<script lang="ts">
  import { onMount } from "svelte";
  import { GetReports, Reports } from "../../ts/reports/main";
  import { startLiveUptime } from "../../ts/uptime/main";
  import View from "./Content/View.svelte";
  import { Masked, ViewerId } from "../../ts/ui";
  import Loader from "../Loader.svelte";
  import { navigate } from "svelte-navigator";
  import sleep from "../../ts/sleep";

  let loading = false;

  onMount(async () => {
    loading = true;
    Reports.set(await GetReports());
    await sleep(100);
    startLiveUptime();

    const params = new URLSearchParams(location.search);
    const id = params.get("rid");

    if (!id) return (loading = false);

    Masked.set(false);
    ViewerId.set(id);
    loading = false;
    navigate("./");
  });
</script>

<div class="content">
  {#if !loading}
    <View />
  {:else}
    <Loader>Starting BugRep</Loader>
  {/if}
</div>
