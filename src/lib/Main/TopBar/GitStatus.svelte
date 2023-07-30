<script>
  import { GitConnected } from "../../../ts/ui";
</script>

<div class="status github" class:good={$GitConnected}>
  <span class="caption">GitHub</span>
  <div class="sep" />
  <span class="material-icons-round">
    {$GitConnected ? "bolt" : "priority_high"}
  </span>
</div>
