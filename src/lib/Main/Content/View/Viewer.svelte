<script lang="ts">
  import { Dialog } from "../../../../ts/dialog/main";
  import { PARAMS } from "../../../../ts/env";
  import { pb } from "../../../../ts/pb/main";
  import type { Report } from "../../../../ts/reports/interface";
  import { GetReports } from "../../../../ts/reports/main";
  import { archiveReport } from "../../../../ts/reports/mutate";
  import sleep from "../../../../ts/sleep";
  import { ViewerId } from "../../../../ts/ui";
  import Loader from "../../../Loader.svelte";
  import Header from "./Viewer/Header.svelte";
  import Panels from "./Viewer/Panels.svelte";

  let data: Report;

  ViewerId.subscribe(update);
  pb.collection("bugrep").subscribe("*", update);

  async function update() {
    if (!$ViewerId) return;

    data = null;

    await sleep(100);

    data = (await GetReports()).filter((a) => a.id == $ViewerId)[0];

    if (!data && $ViewerId && $ViewerId != null)
      Dialog({
        title: "What is that?",
        message: `It doesn't appear report ${$ViewerId} is anywhere on the server... Please check the ID and try again.`,
        buttons: [
          {
            caption: "Okay",
            action() {
              ViewerId.set(null);
            },
          },
        ],
      });
  }
</script>

<div class="viewer">
  {#if data}
    <Header {data} />
    <Panels {data} />
  {:else}
    <Loader>
      Gathering {$ViewerId}...
    </Loader>
  {/if}
</div>
