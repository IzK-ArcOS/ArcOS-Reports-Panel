<script lang="ts">
  import { onMount } from "svelte";
  import logo from "./assets/dev.png";
  import "./css/main.css";
  import DialogRenderer from "./lib/DialogRenderer.svelte";
  import Main from "./lib/Main.svelte";
  import MobileBlock from "./lib/MobileBlock.svelte";
  import { tryGitHub } from "./ts/github/main";
  import { Dialog } from "./ts/dialog/main";

  onMount(async () => {
    Dialog({
      title: "Really long dialog",
      message:
        "This dialog is explicitly written in such a way so that its content would be as long as possible. I'm currently writing the message of this dialog, and as I'm writing I realize more and more how potentially stupid this message truly is. I'm just talking rubbish at this point.",
      buttons: [
        {
          caption: "Ah yes I see",
          action() {
            alert("hi");
          },
        },
        { caption: "Really fucking long button", action() {} },
        { caption: "OK", action() {} },
      ],
    });
    await tryGitHub();
  });
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href={logo} />
</svelte:head>

<Main />
<MobileBlock />
<DialogRenderer />
