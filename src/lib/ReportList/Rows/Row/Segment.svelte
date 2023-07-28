<script lang="ts">
  import { Masked } from "../../../../ts/ui";
  import Hidden from "./Segment/Hidden.svelte";

  export let mleft = false;
  export let mono = false;
  export let blue = false;
  export let sad = false;
  export let grow = false;
  export let small = false;
  export let nomask = false;
</script>

<div
  class="segment"
  class:small
  class:grow
  class:mleft
  class:mono
  class:blue
  class:sad
  class:masked={$Masked && !nomask}
>
  {#if $Masked && !nomask}
    <Hidden />
  {:else}
    <slot />
  {/if}
</div>
