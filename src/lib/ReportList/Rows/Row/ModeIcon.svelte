<script lang="ts">
  import { getLogo } from "../../../../ts/branding";
  import type { Report } from "../../../../ts/reports/interface";
  import Segment from "./Segment.svelte";

  export let report: Report;
</script>

<Segment small c="modeico" nomask>
  <img src={getLogo(report.mode_file)} title={report.mode_file} alt="" />
</Segment>
