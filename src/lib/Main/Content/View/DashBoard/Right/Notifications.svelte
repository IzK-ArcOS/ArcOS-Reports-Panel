<script lang="ts">
  import { NotificationStore } from "../../../../../../ts/notification/main";
  import Notification from "../../../Sidebar/Notification.svelte";
</script>

<div class="card notifications">
  <div class="notif-wrapper">
    {#each Object.entries($NotificationStore) as notification}
      <Notification data={notification[1]} id={notification[0]} />
    {/each}
    {#if !Object.entries($NotificationStore).length}
      <p class="none">Sad, there's nothing</p>
    {/if}
  </div>
</div>
