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
  <div class="dialog {dialog.className || ''}" id="dialog_{id}">
    {#if dialog.title}
      <h3 class="title">{dialog.title}</h3>
    {/if}
    {#if dialog.message}
      <p class="message">{dialog.message}</p>
    {:else if dialog.element}
      <div class="dialog-element">
        <svelte:component this={dialog.element} {dialog} {id} bind:visible />
      </div>
    {:else}
      {JSON.stringify(dialog)}
    {/if}
    {#if dialog.buttons}
      <div class="buttons">
        {#each dialog.buttons as button}
          <Button {button} {id} bind:visible />
        {/each}
      </div>
    {/if}
  </div>
</div>
