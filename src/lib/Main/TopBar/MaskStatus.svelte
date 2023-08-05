<script>
  import { Masked } from "../../../ts/ui";
</script>

<div class="status github" class:good={$Masked}>
  <span class="material-icons-round">
    {$Masked ? "check" : "close"}
  </span>
  <div class="sep" />
  <span class="caption">Locked</span>
</div>
