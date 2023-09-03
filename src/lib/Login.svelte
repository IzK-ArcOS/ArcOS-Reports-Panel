<script lang="ts">
  import logo from "../assets/dev.png";
  import { Dialog } from "../ts/dialog/main";
  import { Login } from "../ts/pb/auth";
  import { authFailed } from "../ts/pb/auth/notif";
  import { pb } from "../ts/pb/main";
  import { passwordResetInvalid, passwordResetSent } from "../ts/pb/notif";

  let loading = false;
  let username: string;
  let password: string;
  let forgot = false;

  async function submit(e: SubmitEvent) {
    e.preventDefault();

    if (forgot) {
      loading = true;
      try {
        await pb.collection("users").requestPasswordReset(username);

        loading = false;
        passwordResetSent();
        forgot = false;
      } catch {
        passwordResetInvalid();
      }

      return;
    }

    loading = true;
    const valid = await Login(username, password);
    loading = false;

    if (!valid) authFailed();
  }

  function toggleForgot() {
    forgot = !forgot;
  }
</script>

<div class="login-wrapper">
  <div class="inner">
    <img src={logo} alt="" />
    <form on:submit={submit}>
      <input type="text" bind:value={username} placeholder="Email" />
      {#if !forgot}
        <input type="password" bind:value={password} placeholder="Password" />
      {/if}
      <div class="buttons">
        <button
          type="button"
          disabled={loading}
          class="flat"
          on:click={toggleForgot}
        >
          {forgot ? "< Back" : "Forgot password?"}
        </button>
        <button type="submit" disabled={loading} class="login"
          >{forgot ? "Reset Password" : "Login"}</button
        >
      </div>
    </form>
  </div>
</div>
