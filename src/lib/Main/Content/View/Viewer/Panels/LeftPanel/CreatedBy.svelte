<script lang="ts">
  import { onMount } from "svelte";
  import type { Report } from "../../../../../../../ts/reports/interface";
  import dayjs from "dayjs";
  import LocalizedFormat from "dayjs/plugin/localizedFormat";

  export let data: Report;

  let ts = "";

  onMount(() => {
    dayjs.extend(LocalizedFormat);
    ts = dayjs(data.created).format("LLL");
  });
</script>

<div class="property createdby">
  <p class="key">Created By</p>
  <p class="value">{data.author || "No user"} on {ts}</p>
</div>
