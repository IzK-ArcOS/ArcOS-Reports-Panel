<script lang="ts">
  import { onMount } from "svelte";
  import { LoginFromStore } from "../ts/pb/auth";
  import { Token } from "../ts/pb/main";
  import Login from "./Login.svelte";
  import Content from "./Main/Content.svelte";
  import TopBar from "./Main/TopBar.svelte";
  import Loader from "./Loader.svelte";
  import SideBar from "./Main/SideBar.svelte";

  let loading = false;

  onMount(async () => {
    loading = true;
    await LoginFromStore();
    loading = false;
  });
</script>

<div class="main">
  <TopBar />
  {#if !loading}
    {#if $Token}
      <Content />
      <SideBar />
    {:else}
      <Login />
    {/if}
  {:else}
    <Loader>Authenticating...</Loader>
  {/if}
</div>
