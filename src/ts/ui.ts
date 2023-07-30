import { writable } from "svelte/store";

export const Masked = writable<boolean>(true);
export const GitConnected = writable<boolean>(false);
