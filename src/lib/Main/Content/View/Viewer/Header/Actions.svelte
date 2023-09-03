<script lang="ts">
  import type { Report } from "../../../../../../ts/reports/interface";
  import { ViewerId } from "../../../../../../ts/ui";
  import Archive from "./Actions/Archive.svelte";
  import Delete from "./Actions/Delete.svelte";
  import Resolve from "./Actions/Resolve.svelte";

  export let data: Report;

  function back() {
    ViewerId.set(null);
  }
</script>

<div class="actions">
  <Resolve {data} />
  <Archive {data} />
  <Delete {data} />

  <button class="goback" on:click={back}>Go Back</button>
</div>
