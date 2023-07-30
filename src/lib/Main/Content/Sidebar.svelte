<script>
  import { NotificationStore } from "../../../ts/notification/main";
  import Notification from "./Sidebar/Notification.svelte";
</script>

<div class="sidebar">
  {#each Object.entries($NotificationStore) as notification}
    <Notification data={notification[1]} id={notification[0]} />
  {/each}
</div>
