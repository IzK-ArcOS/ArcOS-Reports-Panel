<script lang="ts">
  import Segment from "./Segment.svelte";

  export let noApi: boolean;
  export let api: string;
</script>

<Segment
  c="mobile-hide"
  sad={noApi || api == "localhost"}
  self={api == "arcdev.arcapi.nl"}
>
  {api}
</Segment>
