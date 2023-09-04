import { get, writable } from "svelte/store";
import type { DiagStore, Dialog } from "./interface";
export const DialogStore = writable<DiagStore>({});

export function Dialog(notif: Dialog) {
  const store = get(DialogStore);
  const id = Math.floor(Math.random() * 1e9);

  store[id] = notif;

  DialogStore.set(store);

  console.log(`[BUGREP] ${notif.title}: ${notif.message}`);

  return id;
}

export function disposeDialog(id: string) {
  const store = get(DialogStore);

  DialogStore.set({});

  delete store[id];

  DialogStore.set(store);
}
