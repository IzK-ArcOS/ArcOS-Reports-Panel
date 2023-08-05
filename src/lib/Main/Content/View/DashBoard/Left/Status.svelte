<script>
  import { UserModel } from "../../../../../../ts/pb/auth";
  import { Token } from "../../../../../../ts/pb/main";

  import { GitConnected, Masked } from "../../../../../../ts/ui";
</script>

<div class="card status">
  <div class="status" class:error={!$GitConnected} class:good={$GitConnected}>
    GitHub
  </div>
  <div class="status" class:error={!$Token} class:good={$Token}>
    {#if $UserModel}
      {$UserModel.username}
    {:else}
      Authentication
    {/if}
  </div>
  <div class="status" class:warn={!$Masked} class:good={$Masked}>Locked</div>
</div>
