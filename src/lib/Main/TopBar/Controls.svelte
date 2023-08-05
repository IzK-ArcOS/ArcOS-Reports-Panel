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
