<script lang="ts">
  import { onMount } from "svelte";
  import { Dialog } from "../../../../../../../ts/dialog/main";
  import IssueSudo from "../../../../../../Dialog/IssueSudo.svelte";
  import { getReportIssue } from "../../../../../../../ts/reports/issues";
  import { ViewerId } from "../../../../../../../ts/ui";
  import { get } from "svelte/store";

  let disabled = false;

  onMount(async () => {
    disabled = !!(await getReportIssue(get(ViewerId)));
  });

  function createIssue() {
    Dialog({
      element: IssueSudo,
      className: "brissue-sudo",
    });
  }
</script>

<button class="material-icons-round" on:click={createIssue} {disabled}>
  rocket_launch
</button>
