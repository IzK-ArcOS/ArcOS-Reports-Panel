<script lang="ts">
  import { onMount } from "svelte";
  import type { Dialog } from "../../ts/dialog/interface";
  import Button from "./Dialog/Button.svelte";
  import sleep from "../../ts/sleep";

  export let dialog: Dialog;
  export let id: string;

  let visible = false;

  onMount(async () => {
    await sleep(250);

    visible = true;
  });
</script>

<div class="dialog-wrapper" class:visible>
  <div class="dialog" id="dialog_{id}">
    <h3 class="title">{dialog.title}</h3>
    <p class="message">{dialog.message}</p>
    <div class="buttons">
      {#each dialog.buttons as button}
        <Button {button} {id} bind:visible />
      {/each}
    </div>
  </div>
</div>
