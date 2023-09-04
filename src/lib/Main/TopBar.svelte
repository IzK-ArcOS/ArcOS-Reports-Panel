<script lang="ts">
  import "../../css/topbar.css";
  import { Token } from "../../ts/pb/main";
  import { sideBarOpened } from "../../ts/ui";
  import Controls from "./TopBar/Controls.svelte";

  function toggle() {
    $sideBarOpened = !$sideBarOpened;
  }
</script>

<div class="topbar big">
  <p class="title">
    {#if $Token}
      <button class="menu-toggle material-icons-round" on:click={toggle}>
        {$sideBarOpened ? "close" : "menu"}
      </button>
    {/if}
    <!-- <img src={logo} alt="" class="icon" /> -->
    <span>BugRep</span>
  </p>
  <div class="controls">
    {#if $Token}
      <Controls />
    {/if}
  </div>
</div>
