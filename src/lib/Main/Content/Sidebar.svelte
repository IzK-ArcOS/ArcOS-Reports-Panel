<script>
  import { NotificationStore } from "../../../ts/notification/main";
</script>

<div class="sidebar">
  {#each Object.entries($NotificationStore) as notification}
    <h1>{notification[1].title}</h1>
    <p>{notification[1].message}</p>
  {/each}
</div>
