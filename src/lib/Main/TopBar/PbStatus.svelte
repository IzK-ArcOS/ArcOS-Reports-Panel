<script lang="ts">
  import { Token } from "../../../ts/pb/main";
</script>

<div class="status github" class:good={$Token}>
  <span class="material-icons-round">
    {$Token ? "security" : "lock_open"}
  </span>
  <div class="sep" />
  <span class="caption">Authentication</span>
</div>
