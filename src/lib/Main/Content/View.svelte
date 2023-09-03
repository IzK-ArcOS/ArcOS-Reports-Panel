<script>
  import { ViewerId } from "../../../ts/ui";
  import DashBoard from "./View/DashBoard.svelte";
  import Viewer from "./View/Viewer.svelte";
</script>

<div class="view">
  {#if $ViewerId}
    <Viewer />
  {:else}
    <DashBoard />
  {/if}
</div>
