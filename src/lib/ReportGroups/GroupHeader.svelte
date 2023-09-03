<script lang="ts">
  import type { Writable } from "svelte/store";
  import { groupName } from "../../ts/ui";

  export let reports: number = 0;

  function goBack() {
    $groupName = "";
  }
</script>

<div class="groupheader">
  <button
    class="back material-icons-round"
    disabled={!$groupName}
    on:click={goBack}
  >
    arrow_back_ios_new
  </button>
  <div class="path">
    <span class="material-icons-round">folder</span>
    <div class="segment">Opened Reports</div>
    {#if $groupName}
      <div class="segment">{$groupName}</div>
    {/if}
  </div>
  <div class="path-mobile">
    {$groupName || "Report List"}
  </div>
  <div class="count">{reports}</div>
</div>
