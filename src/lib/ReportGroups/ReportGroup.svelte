<script lang="ts">
  import type { Writable } from "svelte/store";

  export let caption: string;
  export let viewing: Writable<string>;
  export let count: number;

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
    <div class="count">{count}</div>
  </button>
{/if}
