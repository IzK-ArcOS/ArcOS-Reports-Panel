<script lang="ts">
  import { Reports } from "../../ts/reports/main";
  import Row from "./Rows/Row.svelte";
</script>

{#if $Reports}
  {#each $Reports as report}
    <Row {report} />
  {/each}
{/if}
