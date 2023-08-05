<script>
  import HeaderRow from "./ReportList/HeaderRow.svelte";
  import Rows from "./ReportList/Rows.svelte";

  export let opened = false;
</script>

<div class="reportlist">
  <HeaderRow />
  <Rows {opened} />
</div>
