<script lang="ts">
  import type { Writable } from "svelte/store";

  export let viewing: Writable<string>;
  export let reports: number = 0;

  function goBack() {
    $viewing = "";
  }
</script>

<div class="groupheader">
  <button
    class="back material-icons-round"
    disabled={!$viewing}
    on:click={goBack}
  >
    arrow_back_ios_new
  </button>
  <div class="path">
    <span class="material-icons-round">folder</span>
    <div class="segment">Opened Reports</div>
    {#if $viewing}
      <div class="segment">{$viewing}</div>
    {/if}
  </div>
  <div class="path-mobile">
    {$viewing || "Report List"}
  </div>
  <div class="count">{reports}</div>
</div>
