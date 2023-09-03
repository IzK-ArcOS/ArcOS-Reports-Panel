import { writable } from "svelte/store";

export const Masked = writable<boolean>(true);
export const GitConnected = writable<boolean>(false);
export const ViewerId = writable<string>("");
export const showOpened = writable<boolean>(true);
export const groupName = writable<string>("");
