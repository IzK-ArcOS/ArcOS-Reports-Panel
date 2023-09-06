<script lang="ts">
  import { Dialog } from "../../../../../../../ts/dialog/main";
  import type { Report } from "../../../../../../../ts/reports/interface";
  import IssueSudo from "../../../../../../Dialog/IssueSudo.svelte";

  function createIssue() {
    Dialog({
      element: IssueSudo,
      className: "brissue-sudo",
    });
  }
</script>

<button class="material-icons-round" on:click={createIssue}
  >rocket_launch</button
>
