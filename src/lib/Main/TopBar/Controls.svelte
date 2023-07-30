<script lang="ts">
  import { Dialog } from "../../../ts/dialog/main";
  import { Logout } from "../../../ts/pb/auth";
  import { Masked } from "../../../ts/ui";

  function toggleMask() {
    $Masked = !$Masked;
  }

  function logout() {
    Dialog({
      title: "Close session?",
      message:
        "You are about to close your session. This will require you to enter your credentials again to access this resource. Do you want to proceed?",
      buttons: [
        { caption: "Close session", action: Logout },
        { caption: "Cancel", action() {} },
      ],
    });
  }
</script>

<button
  class="material-icons-round"
  class:active={$Masked}
  on:click={toggleMask}>lock</button
>
<button class="material-icons-round" on:click={logout}>logout</button>

<style scoped>
  button {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    font-size: 16px;
    width: 18px;
    height: 18px;
    color: var(--fg);
    transition: opacity 0.2s;
  }

  button:hover {
    color: var(--accent);
    filter: var(--elevated-accent-filter);
  }

  button:disabled {
    opacity: 0.2;
  }

  button.active {
    color: var(--clr-green-fg);
  }
</style>
