<script lang="ts">
  import { getLogo } from "../../ts/branding";

  export let minimal: boolean;
</script>

<div class="row head">
  {#if !minimal}
    <div class="segment icon" />
  {/if}
  <div class="segment modeico"><img src={getLogo("release")} alt="" /></div>
  <div class="segment mleft">When?</div>
  <div class="segment grow">What?</div>
  <div class="segment mobile-hide">Who?</div>
  <div class="segment mobile-hide">Where?</div>

  {#if !minimal}
    <div class="segment mobile-hide">Identifier</div>
  {/if}
  <!-- <div class="segment small">Actions</div> -->
</div>
