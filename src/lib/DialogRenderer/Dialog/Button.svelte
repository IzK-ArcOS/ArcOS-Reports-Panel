<script lang="ts">
  import type { Button } from "../../../ts/dialog/interface";
  import { disposeDialog } from "../../../ts/dialog/main";
  import sleep from "../../../ts/sleep";

  export let id: string;
  export let button: Button;
  export let visible: boolean;

  async function action() {
    button.action();
    visible = false;
    await sleep(400);
    disposeDialog(id);
  }
</script>

<button on:click={action} title={button.caption} class={button.className || ""}>
  {button.caption}
</button>
