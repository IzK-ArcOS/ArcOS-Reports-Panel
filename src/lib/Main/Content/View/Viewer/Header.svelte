<script lang="ts">
  import type { Report } from "../../../../../ts/reports/interface";
  import Icon from "../../../../ReportList/Rows/Row/Icon.svelte";
  import Actions from "./Header/Actions.svelte";

  export let data: Report;
</script>

<div class="viewer-header">
  <span>
    <div class="title">
      <Icon report={data} />{data.title}
    </div>
    <div class="id">{data.id} ({data.issueid})</div>
  </span>
  <Actions {data} />
</div>
