<script lang="ts">
  import { GitConnected } from "../../../ts/ui";
</script>

<div
  class="status github"
  class:meh={!$GitConnected}
  class:good={$GitConnected}
>
  <span class="material-icons-round">
    {$GitConnected ? "bolt" : "priority_high"}
  </span>
  <div class="sep" />
  <span class="caption">GitHub</span>
</div>
