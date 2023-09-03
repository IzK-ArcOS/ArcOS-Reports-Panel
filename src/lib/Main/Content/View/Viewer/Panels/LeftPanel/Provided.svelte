<script lang="ts">
  import type { Report } from "../../../../../../../ts/reports/interface";

  export let data: Report;
</script>

<div class="property provided">
  <p class="key">Provided</p>
  <div class="value">
    <div class="item" class:bad={!data.userdata}>User Data</div>
    <div class="item" class:bad={!data.api}>Server Host</div>
  </div>
</div>
