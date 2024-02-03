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

  function getAccess() {
    Dialog({
      title: "Most likely... You can't.",
      message:
        "If you're not on the ArcOS Team, you can't get access to this page. If you are, and you don't have access, than Izaak forgot to get you an account, and you should contact him. Sorry.",
      buttons: [{ caption: "Okay", action() {} }],
    });
  }
</script>

<div class="login-wrapper">
  <div class="inner">
    <img src={logo} alt="" />
    <h1>{!forgot ? "Login to BugRep" : "Enter Email to Reset"}</h1>
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
  <div class="footer">
    ArcOS Confidential - Licensed under GPLv3 -
    <button class="link" on:click={getAccess}> Get Access </button>
  </div>
</div>
