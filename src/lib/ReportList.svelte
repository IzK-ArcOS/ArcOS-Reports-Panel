<script>
  import HeaderRow from "./ReportList/HeaderRow.svelte";
  import Rows from "./ReportList/Rows.svelte";

  export let opened = false;
  export let minimal = false;
</script>

<div class="reportlist">
  <HeaderRow {minimal} />
  <Rows {opened} {minimal} />
</div>
