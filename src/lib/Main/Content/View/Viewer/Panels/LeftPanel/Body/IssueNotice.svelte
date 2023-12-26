<script lang="ts">
  import { onMount } from "svelte";
  import { getReportIssue } from "../../../../../../../../ts/reports/issues";
  import type { Report } from "../../../../../../../../ts/reports/interface";
  import type { GitHubIssue } from "../../../../../../../../ts/reports/interfaces/github";
  import { getIcon } from "../../../../../../../../ts/reports/icon";

  export let report: Report;
  export let issued = false;

  let issueData: GitHubIssue = null;
  let icon = "";

  onMount(async () => {
    const issue = await getReportIssue(report.id);

    if (!issue) return;

    icon = await getIcon(report)[1];
    issueData = issue;
    issued = true;
  });

  function goHere() {
    window.open(issueData.html_url, "_blank");
  }
</script>

{#if issueData}
  <div class="issue-notice">
    {#if issueData.assignee}
      <img src={issueData.assignee.avatar_url || icon} alt="" class="icon" />
    {/if}
    <div class="text">
      <p class="title">This report has been issue'd!</p>
      <p class="description">{issueData.title}</p>
    </div>
    <button class="open material-icons-round" on:click={goHere}>launch</button>
  </div>
{/if}
