<script lang="ts">
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import { Dialog } from "../../../ts/dialog/main";
  import { pb } from "../../../ts/pb/main";
  import type { ReportRecord } from "../../../ts/reports/interface";
  import AuthorSegment from "./Row/AuthorSegment.svelte";
  import Icon from "./Row/Icon.svelte";
  import Segment from "./Row/Segment.svelte";

  export let report: ReportRecord;
  export let minimal: boolean;

  let isSvelteWindow = false;
  let timestamp = "";
  let api = "";
  let noApi = false;

  onMount(() => {
    timestamp = dayjs(report.created).format("D MMM, HH:mm");

    noApi = !report.api || report.api == "<api>";
    api = report.api && report.api != "<api>" ? report.api : "None";
    isSvelteWindow = report.title.toLowerCase().startsWith("svelte:window");

    if (report.resolved && !report.closed) {
      Dialog({
        title: "Something is wrong",
        message: `Report ${report.id} is solved but not closed, that ain't right... Do you want to close the report to correct this?`,
        buttons: [
          {
            caption: "Yes, close it",
            async action() {
              pb.collection("bugrep").update(report.id, { closed: true });
            },
          },
          { caption: "nah don't", action() {} },
        ],
      });
    }
  });
</script>

<div class="row" class:solved={report.resolved} class:closed={report.closed}>
  {#if !minimal}
    <Icon {report} />
  {/if}
  <Segment mleft nomask>{timestamp}</Segment>
  <Segment grow nomask>{isSvelteWindow ? "Crash Report" : report.title}</Segment
  >
  <AuthorSegment {report} />
  <Segment
    c="mobile-hide"
    sad={noApi || api == "localhost"}
    self={api == "arcdev.arcapi.nl"}
  >
    {api == "arcdev.arcapi.nl" ? "ArcDev" : api}
  </Segment>
  {#if !minimal}
    <Segment mono>{report.id}</Segment>
  {/if}
</div>
