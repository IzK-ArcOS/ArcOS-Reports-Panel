<script lang="ts">
  import { onMount } from "svelte";
  import { ViewerId } from "../../ts/ui";
  import { pb } from "../../ts/pb/main";
  import { createReportIssue } from "../../ts/issues/main";
  import { Dialog, disposeDialog } from "../../ts/dialog/main";
  import secure from "../../assets/secure.svg";
  import sleep from "../../ts/sleep";

  export let id: string;
  export let visible: boolean;

  let loading = false;
  let username = "";
  let password = "";

  onMount(() => {
    if (!pb.authStore.model) return;

    username = pb.authStore.model.username;
  });

  async function createIt() {
    if (!$ViewerId || !password) return;

    return (loading = true);

    const code = await createReportIssue($ViewerId, password);

    let title: string;
    let message: string;

    switch (code) {
      case 404:
        title = "That's impossible";
        message =
          "ArcPB could not find the report! That means that either it was abducted by aliens or you messed with the frontend. Don't do that.";
        break;
      case 500:
        title = "GitHub Failed Us";
        message =
          "Could not create the GitHub issue. we may be rate limited. Oh well.";
        break;
      case 403:
        title = "Could not log you in";
        message =
          "Either you entered your password wrong or you're missing the BRISSUE scope. Please check with The Board if it's the latter.";
        break;
      default:
        title = "Created!";
        message =
          "It appears that the GitHub issue was created successfully. It should show up on the Frontend issues page.";
        break;
    }

    visible = false;

    await sleep(400);

    disposeDialog(id);

    await sleep(0);

    Dialog({
      title,
      message,
      buttons: [
        {
          caption: "Okay",
          action() {
            ViewerId.set(null);
          },
        },
      ],
    });
  }

  async function cancel() {
    visible = false;
    await sleep(400);
    disposeDialog(id);
  }
</script>

<div class="top">
  <img src={secure} alt="" />
  <p>BugRep Secure Context</p>
</div>
<p class="sub">You're about to perform a potentially destructive action</p>
<p class="context">
  <b>{username}</b>, you're about to create a GitHub issue for report
  <b>{$ViewerId || "<unknown>"}</b>. Please enter your password to continue.
</p>
{#if !loading}
  <input
    type="password"
    class="password"
    bind:value={password}
    placeholder="Password for {username}"
    disabled={loading}
  />
{:else}
  <input type="text" disabled value="Please wait..." />
{/if}
<div class="buttons">
  <button on:click={cancel} disabled={loading}>Cancel</button>
  <button
    disabled={!username || !$ViewerId || !password || loading}
    on:click={createIt}
  >
    {#if loading}
      <div class="spinner tiny" />
    {:else}
      Authorize
    {/if}
  </button>
</div>
