<script>
  import "../../css/topbar.css";
  import logo from "../../assets/dev.png";
  import { UserModel } from "../../ts/pb/auth";
  import Controls from "./TopBar/Controls.svelte";
</script>

<div class="titlebar big">
  <p class="title">
    <img src={logo} alt="" class="icon" />
    <span>ArcOS Reports Panel - {$UserModel.username} </span>
  </p>
  <div class="controls"><Controls /></div>
</div>
