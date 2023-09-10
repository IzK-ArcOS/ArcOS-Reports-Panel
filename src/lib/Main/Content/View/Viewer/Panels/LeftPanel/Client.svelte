<script lang="ts">
  import { getLogo } from "../../../../../../../ts/branding";
  import type { Report } from "../../../../../../../ts/reports/interface";

  export let data: Report;
</script>

<div class="property client">
  <p class="key">Client</p>
  <div class="value">
    <p class="host">{data.frontend}</p>
    <div class="flags">
      <div class="flag">
        Vite: {data.metaenv
          ? data.metaenv.PROD
            ? "Production"
            : "Development"
          : "No Meta!"}
      </div>
      <div class="flag">
        <span>Mode: {data.mode_file}</span>
        <img src={getLogo(data.mode_file)} alt="" />
      </div>
      <div class="flag">Desktop: {data.desktop ? "Yes" : "No"}</div>
      <div class="flag">Version: {data.version}</div>
    </div>
  </div>
</div>
