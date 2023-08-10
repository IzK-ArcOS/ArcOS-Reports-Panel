<script lang="ts">
  import { UserModel } from "../../../../../../ts/pb/auth";
  import { Token } from "../../../../../../ts/pb/main";

  import { GitConnected, Masked } from "../../../../../../ts/ui";
  import {
    UptimeState,
    type Uptime,
  } from "../../../../../../ts/uptime/interface";
  import { LiveUptimes } from "../../../../../../ts/uptime/main";
  import { UPTIME_CAPTIONS } from "../../../../../../ts/uptime/store";

  let uptimes: Uptime = {};

  LiveUptimes.subscribe((v) => {
    if (!v) return;

    uptimes = {};
    uptimes = v;
  });
</script>

<div class="card status">
  <!-- <div class="status" class:error={!$Token} class:good={$Token}>
    {#if $UserModel}
      {$UserModel.username}
    {:else}
      Authentication
    {/if}
  </div> -->
  {#each Object.entries(uptimes) as uptime}
    <div
      class="status"
      class:error={uptime[1] == UptimeState.offline}
      class:good={uptime[1] == UptimeState.online}
      class:warn={uptime[1] == UptimeState.maintenance ||
        uptime[1] == UptimeState.pending}
    >
      {UPTIME_CAPTIONS[uptime[0]]}
    </div>
  {/each}
  <div class="status" class:error={!$GitConnected} class:good={$GitConnected}>
    GitHub
  </div>
  <div class="status" class:warn={!$Masked} class:good={$Masked}>Locked</div>
</div>
