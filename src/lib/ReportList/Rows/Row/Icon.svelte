<script lang="ts">
  import { onMount } from "svelte";
  import desktopIcon from "../../../../assets/desktop.svg";
  import webIcon from "../../../../assets/web.svg";
  import { getIcon } from "../../../../ts/reports/icon";
  import type { Report } from "../../../../ts/reports/interface";
  import Segment from "./Segment.svelte";

  export let report: Report;

  let url = "";
  let caption = "";

  onMount(async () => {
    const icon = await getIcon(report);

    url = icon[1];
    caption = icon[0];
  });
</script>

<Segment c="icon" nomask>
  <img src={url} alt={report.id} title={caption} />
  <img
    src={report.desktop ? desktopIcon : webIcon}
    alt={report.id}
    title={report.desktop ? "Desktop" : "Web"}
  />
</Segment>
