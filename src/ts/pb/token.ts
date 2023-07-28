import type { Credential } from "./token/interface";

export function encodeToken(username: string, password: string) {
  return btoa(`${username}:${password}`);
}
export function decodeToken(token: string): Credential | false {
  const split = atob(token).split(":");

  if (split.length !== 2) return false;

  return { username: split[0], password: split[1] };
}
