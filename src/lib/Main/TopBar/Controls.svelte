<script lang="ts">
  import { Logout } from "../../../ts/pb/auth";
  import { Masked } from "../../../ts/ui";

  function toggleMask() {
    $Masked = !$Masked;
  }
</script>

<button
  class="material-icons-round"
  class:active={$Masked}
  on:click={toggleMask}>lock</button
>
<button class="material-icons-round" on:click={Logout}>logout</button>

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
