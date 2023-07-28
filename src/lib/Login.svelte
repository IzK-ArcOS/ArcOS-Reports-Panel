<script lang="ts">
  import { Login } from "../ts/pb/auth";

  let username: string;
  let password: string;

  async function submit(e: SubmitEvent) {
    e.preventDefault();

    await Login(username, password);
  }
</script>

<div class="login-wrapper">
  <div class="inner">
    <form on:submit={submit}>
      <input type="text" bind:value={username} placeholder="Username" />
      <input type="password" bind:value={password} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</div>
