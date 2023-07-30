<script lang="ts">
  import logo from "../assets/dev.png";
  import { Dialog } from "../ts/dialog/main";
  import { Login } from "../ts/pb/auth";

  let loading = false;
  let username: string;
  let password: string;

  async function submit(e: SubmitEvent) {
    e.preventDefault();

    loading = true;
    const valid = await Login(username, password);
    loading = false;

    if (!valid) {
      Dialog({
        title: "Authentication failed.",
        message:
          "The server did not permit the login attempt. Please check the entered credentials and try again.",
        buttons: [{ caption: "OK", action() {} }],
      });
    }
  }
</script>

<div class="login-wrapper">
  <div class="inner">
    <img src={logo} alt="" />
    <form on:submit={submit}>
      <input type="text" bind:value={username} placeholder="Username" />
      <input type="password" bind:value={password} placeholder="Password" />
      <button type="submit" disabled={loading}>Login</button>
    </form>
  </div>
</div>
