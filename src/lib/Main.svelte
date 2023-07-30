<script lang="ts">
  import { onMount } from "svelte";
  import { LoginFromStore } from "../ts/pb/auth";
  import { Token } from "../ts/pb/main";
  import Login from "./Login.svelte";
  import Content from "./Main/Content.svelte";
  import TopBar from "./Main/TopBar.svelte";

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
    {:else}
      <Login />
    {/if}
  {:else}
    Loading...
  {/if}
</div>
