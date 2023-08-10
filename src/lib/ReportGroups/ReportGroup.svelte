<script lang="ts">
  import type { Writable } from "svelte/store";

  export let caption: string;
  export let viewing: Writable<string>;

  function navigate() {
    $viewing = caption;
  }
</script>

{#if caption}
  <button class="reportgroup" on:click={navigate}>
    <span class="material-icons-round">folder</span>
    <span>
      {caption}
    </span>
  </button>
{/if}
