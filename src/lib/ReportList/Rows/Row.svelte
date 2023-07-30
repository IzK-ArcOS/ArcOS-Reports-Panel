<script lang="ts">
  import { onMount } from "svelte";
  import type { ReportRecord } from "../../../ts/reports/interface";
  import dayjs from "dayjs";
  import { UserModel } from "../../../ts/pb/auth";
  import Segment from "./Row/Segment.svelte";
  import Actions from "./Row/Actions.svelte";
  import Icon from "./Row/Icon.svelte";

  let timestamp = "";
  let api = "";
  let noApi = false;
  let noAuthor = false;

  onMount(() => {
    timestamp = dayjs(report.created).format("D MMM YYYY, HH:mm:ss");

    noApi = !report.api || report.api == "<api>";
    noAuthor = !report.author;
    api = report.api && report.api != "<api>" ? report.api : "None";
  });

  export let report: ReportRecord;
</script>

<div class="row" class:solved={report.resolved} class:closed={report.closed}>
  <Icon {report} />
  <Segment grow nomask>{report.title}</Segment>
  <Segment
    sad={noAuthor}
    self={report.author && $UserModel.authorname == report.author}
  >
    {report.author || "None"}
  </Segment>
  <Segment sad={noApi || api == "localhost"} self={api == "arcdev.arcapi.nl"}>
    {api}
  </Segment>
  <Segment mleft nomask>{timestamp}</Segment>
  <Segment mono>{report.id}</Segment>
  <Actions {report} />
</div>
