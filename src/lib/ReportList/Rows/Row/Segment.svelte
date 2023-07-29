<script lang="ts">
  import { Masked } from "../../../../ts/ui";
  import Hidden from "./Segment/Hidden.svelte";

  export let mleft = false;
  export let mono = false;
  export let self = false;
  export let sad = false;
  export let grow = false;
  export let small = false;
  export let nomask = false;
  export let c = "";
</script>

<div
  class="segment {c}"
  class:small
  class:grow
  class:mleft
  class:mono
  class:self
  class:sad
  class:masked={$Masked && !nomask}
>
  {#if $Masked && !nomask && !sad}
    <Hidden />
  {:else}
    <slot />
  {/if}
</div>
