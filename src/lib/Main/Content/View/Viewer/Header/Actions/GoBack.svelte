<script lang="ts">
  import { ViewerId } from "../../../../../../../ts/ui";

  function back() {
    ViewerId.set(null);
  }
</script>

<button class="goback" on:click={back}>Go Back</button>
