import { get, writable } from "svelte/store";
import { Token, pb } from "./main";
import { decodeToken, encodeToken } from "./token";
import type { Credential } from "./token/interface";
import type { Admin, Record } from "pocketbase";
import { authNotification } from "./auth/notif";
import { NotificationStore } from "../notification/main";

export const AUTH_KEY = "bugrep-auth";
export const UserModel = writable<Record | Admin>();

pb.authStore.onChange((v) => {
  if (!v) return;

  UserModel.set(pb.authStore.model);
});

export async function Login(username: string, password: string) {
  await pb.collection("users").authWithPassword(username, password);

  const token = get(Token);
  const valid = !!token;

  if (valid) {
    localStorage.setItem(AUTH_KEY, encodeToken(username, password));
    authNotification(username);
  }

  return valid;
}

export function Logout() {
  localStorage.removeItem(AUTH_KEY);
  Token.set(undefined);
  UserModel.set(undefined);
  pb.authStore.clear();
  NotificationStore.set({});
}

export async function LoginFromStore() {
  const token = localStorage.getItem(AUTH_KEY);

  if (!token) return false;

  const { username, password } = decodeToken(token) as Credential;

  return await Login(username, password);
}
