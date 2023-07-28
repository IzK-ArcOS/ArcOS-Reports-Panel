import Pocketbase from "pocketbase";
import { writable } from "svelte/store";

export const Token = writable<string>();
export const pb = new Pocketbase("https://pb.arcapi.nl/");

pb.authStore.onChange((t) => Token.set(t));
