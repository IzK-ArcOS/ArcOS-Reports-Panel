<script lang="ts">
  import { Dialog } from "../../../../../../../ts/dialog/main";

  export let agent: string;

  function details() {
    Dialog({
      title: "UserAgent",
      message: agent,
      buttons: [{ caption: "I see", action() {} }],
    });
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="property useragent" on:click={details}>
  <p class="key">UserAgent</p>
  <p class="value">{agent || "No User Agent"}</p>
</div>
