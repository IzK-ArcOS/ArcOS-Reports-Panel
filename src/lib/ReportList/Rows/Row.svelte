<script lang="ts">
  import { onMount } from "svelte";
  import type { ReportRecord } from "../../../ts/reports/interface";
  import dayjs from "dayjs";
  import { UserModel } from "../../../ts/pb/auth";
  import Segment from "./Row/Segment.svelte";
  import Actions from "./Row/Actions.svelte";
  import Icon from "./Row/Icon.svelte";
  import AuthorSegment from "./Row/AuthorSegment.svelte";

  let timestamp = "";
  let api = "";
  let noApi = false;

  onMount(() => {
    timestamp = dayjs(report.created).format("D MMM YYYY, HH:mm:ss");

    noApi = !report.api || report.api == "<api>";
    api = report.api && report.api != "<api>" ? report.api : "None";
  });

  export let report: ReportRecord;
</script>

<div class="row" class:solved={report.resolved} class:closed={report.closed}>
  <Icon {report} />
  <Segment grow nomask>{report.title}</Segment>
  <AuthorSegment {report} />
  <Segment sad={noApi || api == "localhost"} self={api == "arcdev.arcapi.nl"}>
    {api}
  </Segment>
  <Segment mleft nomask>{timestamp}</Segment>
  <Segment mono>{report.id}</Segment>
  <Actions {report} />
</div>
