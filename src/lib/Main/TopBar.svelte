<script>
  import logo from "../../assets/dev.png";
  import "../../css/topbar.css";
  import { UserModel } from "../../ts/pb/auth";
  import { Token } from "../../ts/pb/main";
  import Controls from "./TopBar/Controls.svelte";
  import GitStatus from "./TopBar/GitStatus.svelte";
  import MaskStatus from "./TopBar/MaskStatus.svelte";
  import PbStatus from "./TopBar/PbStatus.svelte";
</script>

<div class="topbar big">
  <p class="title">
    <!-- <img src={logo} alt="" class="icon" /> -->
    <span>ArcReports</span>
  </p>
  <div class="controls">
    <div class="status-wrapper">
      <GitStatus />
      <PbStatus />
      {#if $Token}
        <MaskStatus />
      {/if}
    </div>
    {#if $Token}
      <div class="sep" />
      <Controls />
    {/if}
  </div>
</div>
