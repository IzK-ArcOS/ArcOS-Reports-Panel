<script lang="ts">
  export let title: string;
</script>

<div class="statistic">
  <h1 class="header">{title}</h1>
  <p class="content"><slot /></p>
</div>
