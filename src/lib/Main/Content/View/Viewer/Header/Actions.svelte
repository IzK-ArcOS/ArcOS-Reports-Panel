<script lang="ts">
  import type { Report } from "../../../../../../ts/reports/interface";
  import Archive from "./Actions/Archive.svelte";
  import Delete from "./Actions/Delete.svelte";
  import GoBack from "./Actions/GoBack.svelte";
  import Resolve from "./Actions/Resolve.svelte";

  export let data: Report;
</script>

<div class="actions">
  <Resolve {data} />
  <Archive {data} />
  <Delete {data} />
  <GoBack />
</div>
