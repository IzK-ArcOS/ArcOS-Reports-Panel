<script lang="ts">
  import { pb } from "../../../../ts/pb/main";
  import type { Report } from "../../../../ts/reports/interface";
  import { GetReports } from "../../../../ts/reports/main";
  import sleep from "../../../../ts/sleep";
  import { ViewerId } from "../../../../ts/ui";
  import Header from "./Viewer/Header.svelte";
  import Panels from "./Viewer/Panels.svelte";

  let data: Report;

  ViewerId.subscribe(update);
  pb.collection("bugrep").subscribe("*", update);

  async function update() {
    console.log("UPDATING! ", data ? data.id : "ID");
    if (!$ViewerId) return;

    data = null;

    await sleep(100);

    data = (await GetReports()).filter((a) => a.id == $ViewerId)[0];
  }
</script>

<div class="viewer">
  {#if data}
    <Header {data} />
    <Panels {data} />
  {:else}
    Gathering information about {$ViewerId}...
  {/if}
</div>
