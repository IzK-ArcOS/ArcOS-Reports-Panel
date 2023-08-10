<script lang="ts">
  import { onMount } from "svelte";
  import logo from "./assets/dev.png";
  import "./css/main.css";
  import DialogRenderer from "./lib/DialogRenderer.svelte";
  import Main from "./lib/Main.svelte";
  import { tryGitHub } from "./ts/github/main";

  onMount(async () => {
    await tryGitHub();
  });
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href={logo} />
</svelte:head>

<Main />
<!-- <MobileBlock />
 --><DialogRenderer />
