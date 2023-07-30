<script lang="ts">
  import { DialogStore } from "../ts/dialog/main";
  import Dialog from "./DialogRenderer/Dialog.svelte";
</script>

{#if $DialogStore}
  {#each Object.entries($DialogStore) as entry}
    <Dialog id={entry[0]} dialog={entry[1]} />
  {/each}
{/if}
