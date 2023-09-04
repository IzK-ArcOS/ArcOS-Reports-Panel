<script lang="ts">
  import sleep from "../../../../../../../ts/sleep";
  import { showOpened } from "../../../../../../../ts/ui";

  export let loading: Boolean;

  async function toggleMode(mode: boolean) {
    $showOpened = mode;
    loading = true;

    await sleep(0);

    loading = false;
  }
</script>

<div class="tabs">
  <button
    class="tab"
    class:selected={$showOpened}
    on:click={() => toggleMode(true)}
  >
    Opened
  </button>
  <button
    class="tab"
    class:selected={!$showOpened}
    on:click={() => toggleMode(false)}
  >
    All
  </button>
</div>
