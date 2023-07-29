<script lang="ts">
  import { onMount } from "svelte";
  import { getIcon } from "../../../../ts/reports/icon";
  import type { ReportRecord } from "../../../../ts/reports/interface";
  import Segment from "./Segment.svelte";

  export let report: ReportRecord;

  let url = "";

  onMount(async () => {
    url = await getIcon(report);
  });
</script>

<Segment c="icon" nomask><img src={url} alt={report.id} /></Segment>
