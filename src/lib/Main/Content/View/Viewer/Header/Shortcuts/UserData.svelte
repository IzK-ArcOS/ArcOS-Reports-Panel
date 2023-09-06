<script lang="ts">
  import type { Report } from "../../../../../../../ts/reports/interface";

  export let data: Report;

  function userdata() {
    const blob = new Blob([JSON.stringify(data.userdata, null, 2)], {
      type: "application/json",
    });

    window.open(URL.createObjectURL(blob), "_blank");
  }
</script>

<button
  class="copy material-icons-round"
  on:click={userdata}
  disabled={!data.userdata}
  title="View UserData in new tab"
>
  account_tree
</button>
