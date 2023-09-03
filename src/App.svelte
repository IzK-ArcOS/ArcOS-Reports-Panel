<script lang="ts">
  import { onMount } from "svelte";
  import logo from "./assets/dev.png";
  import "./css/main.css";
  import DialogRenderer from "./lib/DialogRenderer.svelte";
  import Main from "./lib/Main.svelte";
  import { tryGitHub } from "./ts/github/main";

  onMount(async () => {
    await tryGitHub();

    const ls = localStorage.getItem("br-zoomout");

    (document.body.style as any).zoom = ls ? "80%" : "";
  });
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href={logo} />
</svelte:head>

<Main />
<!-- <MobileBlock />
 --><DialogRenderer />
