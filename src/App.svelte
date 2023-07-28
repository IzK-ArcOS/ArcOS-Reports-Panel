<script lang="ts">
  import "./css/main.css";
  import { onMount } from "svelte";
  import Login from "./lib/Login.svelte";
  import { LoginFromStore } from "./ts/pb/auth";
  import { Token } from "./ts/pb/main";
  import Main from "./lib/Main.svelte";
  import MobileBlock from "./lib/MobileBlock.svelte";

  let loading = false;

  onMount(async () => {
    loading = true;
    await LoginFromStore();
    loading = false;
  });
</script>

{#if !loading}
  {#if $Token}
    <Main />
  {:else}
    <Login />
  {/if}
{:else}
  Loading...
{/if}
<MobileBlock />
