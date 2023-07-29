<script lang="ts">
  import { onMount } from "svelte";
  import logo from "./assets/dev.png";
  import "./css/main.css";
  import Login from "./lib/Login.svelte";
  import Main from "./lib/Main.svelte";
  import MobileBlock from "./lib/MobileBlock.svelte";
  import { LoginFromStore } from "./ts/pb/auth";
  import { Token } from "./ts/pb/main";
  import { tryGitHub } from "./ts/github/main";

  let loading = false;

  onMount(async () => {
    await tryGitHub();
    loading = true;
    await LoginFromStore();
    loading = false;
  });
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href={logo} />
</svelte:head>

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
