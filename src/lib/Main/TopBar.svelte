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

<div class="titlebar big">
  <p class="title">
    <img src={logo} alt="" class="icon" />
    <span
      >ArcOS Reports Panel{$UserModel ? ` - ${$UserModel.username}` : ""}</span
    >
  </p>
  <div class="controls">
    <GitStatus />
    <PbStatus />
    <MaskStatus />
    <div class="sep" />
    {#if $Token}
      <Controls />
    {/if}
  </div>
</div>
