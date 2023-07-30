<script lang="ts">
  import type { Notif } from "../../../../ts/notification/interface";
  import { disposeNotification } from "../../../../ts/notification/main";

  export let data: Notif;
  export let id: string;

  function dispose() {
    disposeNotification(id);
  }
</script>

<div class="notification">
  <h1 class="title">
    <span>{data.title}</span>
    <button class="close material-icons-round" on:click={dispose}>close</button>
  </h1>
  <p class="message">{data.message}</p>
</div>
