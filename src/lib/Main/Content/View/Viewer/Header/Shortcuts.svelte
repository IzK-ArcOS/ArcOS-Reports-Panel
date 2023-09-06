<script lang="ts">
  import type { Report } from "../../../../../../ts/reports/interface";
  import CreateIssue from "./Shortcuts/CreateIssue.svelte";
  import Download from "./Shortcuts/Download.svelte";
  import Share from "./Shortcuts/Share.svelte";
  import UserData from "./Shortcuts/UserData.svelte";

  export let data: Report;
</script>

<Share {data} />
<CreateIssue />
<Download {data} />
<UserData {data} />
