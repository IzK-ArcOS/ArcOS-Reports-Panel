<script lang="ts">
  import type { Report } from "../../../../../../ts/reports/interface";
  import Body from "./LeftPanel/Body.svelte";
  import Client from "./LeftPanel/Client.svelte";
  import CreatedBy from "./LeftPanel/CreatedBy.svelte";
  import Provided from "./LeftPanel/Provided.svelte";
  import Server from "./LeftPanel/Server.svelte";
  import UserAgent from "./LeftPanel/UserAgent.svelte";

  export let data: Report;
</script>

{#if data}
  <div class="leftpanel">
    <CreatedBy {data} />
    <Server server={data.api} />
    <UserAgent agent={data.useragent} />
    <Client {data} />
    <Provided {data} />
    <Body {data} />
  </div>
{/if}
