<script lang="ts">
  import "../../css/topbar.css";
  import { Token } from "../../ts/pb/main";
  import Controls from "./TopBar/Controls.svelte";
</script>

<div class="topbar big">
  <p class="title">
    <!-- <img src={logo} alt="" class="icon" /> -->
    <span>ArcReports</span>
  </p>
  <div class="controls">
    {#if $Token}
      <Controls />
    {/if}
  </div>
</div>
