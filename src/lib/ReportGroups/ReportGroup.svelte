<script lang="ts">
  import { groupName } from "../../ts/ui";

  export let caption: string;
  export let count: number;

  function navigate() {
    $groupName = caption;
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
