<script lang="ts">
  import { onMount } from "svelte";
  import logo from "./assets/dev.png";
  import "./css/main.css";
  import Main from "./lib/Main.svelte";
  import MobileBlock from "./lib/MobileBlock.svelte";
  import { tryGitHub } from "./ts/github/main";
  import { Notification } from "./ts/notification/main";

  onMount(async () => {
    await tryGitHub();
  });
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href={logo} />
</svelte:head>

<Main />
<MobileBlock />
