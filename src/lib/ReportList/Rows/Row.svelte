<script lang="ts">
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import { Dialog } from "../../../ts/dialog/main";
  import { pb } from "../../../ts/pb/main";
  import type { ReportRecord } from "../../../ts/reports/interface";
  import AuthorSegment from "./Row/AuthorSegment.svelte";
  import Icon from "./Row/Icon.svelte";
  import Segment from "./Row/Segment.svelte";
  import { Masked, ViewerId } from "../../../ts/ui";
  import { PARAMS } from "../../../ts/env";
  import { getLogo } from "../../../ts/branding";
  import ApiSegment from "./Row/ApiSegment.svelte";
  import ModeIcon from "./Row/ModeIcon.svelte";

  export let report: ReportRecord;
  export let minimal: boolean;

  let mbTimestamp = "";
  let timestamp = "";
  let api = "";
  let noApi = false;

  onMount(() => {
    timestamp = dayjs(report.created).format("D MMM, HH:mm");
    mbTimestamp = dayjs(report.created).format("D MMM");

    noApi = !report.api || report.api == "<api>";
    api = report.api && report.api != "<api>" ? report.api : "None";
    api = api == "arcdev.arcapi.nl" ? "ArcDev" : api;

    if (report.resolved && !report.closed) {
      Dialog({
        title: "Something is wrong",
        message: `Report ${report.id} is solved but not closed, that ain't right... Do you want to close the report to correct this?`,
        buttons: [
          {
            caption: "Yes, close it",
            async action() {
              pb.collection("bugrep").update(
                report.id,
                { closed: true },
                PARAMS
              );
            },
          },
          { caption: "nah don't", action() {} },
        ],
      });
    }

    if (report.comments.length) {
      const firstComment = report.expand.comments[0];

      console.log(`Report ${report.id} got comment from ${firstComment.expand.author.fullname}: ${firstComment.body}`)
    }
  });

  function view() {
    if (!$Masked) return ViewerId.set(report.id);

    Dialog({
      title: "Hold on!",
      message:
        "BugRep is currently masked! A report might contain sensitive data about the user that submitted the report. Proceed?",
      buttons: [
        {
          caption: "Open it",
          action() {
            ViewerId.set(report.id);
          },
        },
        {
          caption: "Go Back",
          action() {},
        },
      ],
    });
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if report}
  <div
    class="row"
    class:solved={report.resolved}
    class:closed={report.closed}
    on:click={view}
  >
    {#if !minimal}
      <Icon {report} />
    {/if}
    <ModeIcon {report} />
    <Segment mleft nomask c="ts-mobile">{mbTimestamp}</Segment>
    <Segment mleft nomask c="ts-desktop">{timestamp}</Segment>
    <Segment grow c="body">
      {report.body}
    </Segment>
    <AuthorSegment {report} />
    <ApiSegment {api} {noApi} />
    {#if !minimal}
      <Segment mono>{report.id}</Segment>
    {/if}
  </div>
{/if}
