<script lang="ts">
  import { onMount } from "svelte";
  import type { ReportRecord } from "../../../ts/reports/interface";
  import dayjs from "dayjs";
  import { UserModel } from "../../../ts/pb/auth";
  import Segment from "./Row/Segment.svelte";

  let timestamp = "";
  let noApi = false;
  let noAuthor = false;

  onMount(() => {
    timestamp = dayjs(report.created).format("D MMM YYYY, HH:mm:ss");

    noApi = !report.api || report.api == "<api>";
    noAuthor = !report.author;
  });

  export let report: ReportRecord;
</script>

<div class="row" class:solved={report.resolved} class:closed={report.closed}>
  <Segment grow nomask>{report.title}</Segment>
  <Segment
    sad={noAuthor}
    blue={report.author && $UserModel.authorname == report.author}
  >
    {report.author || "None"}
  </Segment>
  <Segment sad={noApi}>{report.api || "None"}</Segment>
  <Segment mleft nomask>{timestamp}</Segment>
  <Segment mono>{report.id}</Segment>
  <Segment small nomask>Actions</Segment>
</div>
