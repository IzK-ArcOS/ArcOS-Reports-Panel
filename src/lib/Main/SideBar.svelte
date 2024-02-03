<script lang="ts">
  import { sideBarOpened } from "../../ts/ui";
  import Statistics from "./Content/View/DashBoard/Left/Statistics.svelte";
  import Status from "./Content/View/DashBoard/Left/Status.svelte";
  import Notifications from "./Content/View/DashBoard/Right/Notifications.svelte";

  function closeSidebar() {
    sideBarOpened.set(false);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="sidebar-shade"
  class:opened={$sideBarOpened}
  on:click={closeSidebar}
/>
<div class="sidebar" class:opened={$sideBarOpened}>
  <Statistics />
  <Notifications />
</div>
