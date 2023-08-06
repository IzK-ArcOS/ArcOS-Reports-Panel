<script lang="ts">
  import { onMount } from "svelte";
  import type { ReportRecord } from "../../../../ts/reports/interface";
  import Segment from "./Segment.svelte";
  import { UserModel } from "../../../../ts/pb/auth";

  export let report: ReportRecord;
  let noAuthor = false;

  onMount(() => {
    noAuthor = !report.author;
  });
</script>

<Segment
  sad={noAuthor}
  self={report.author && $UserModel.authorname == report.author}
  c="mobile-hide"
>
  {report.author || "None"}
</Segment>
