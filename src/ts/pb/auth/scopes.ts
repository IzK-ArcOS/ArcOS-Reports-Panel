import { get } from "svelte/store";
import { UserModel } from "../auth";

export function verifyScopes() {
  const userModel = get(UserModel);
  const REQUIRED = ["bugrep", "brmutate"];

  if (!userModel.scope) return false;

  for (let i = 0; i < REQUIRED.length; i++) {
    if (!userModel.scope.includes(REQUIRED[i])) return false;
  }

  return true;
}
