import { get, writable } from "svelte/store";
import type { Notif, NotifStore } from "./interface";

export const NotificationStore = writable<NotifStore>({});

export function Notification(notif: Notif) {
  const store = get(NotificationStore);
  const id = Math.floor(Math.random() * 1e9);

  store[id] = notif;

  NotificationStore.set(store);

  console.log(`[BUGREP] ${notif.title}: ${notif.message}`);

  return id;
}

export function disposeNotification(id: string) {
  const store = get(NotificationStore);

  NotificationStore.set({});

  delete store[id];

  NotificationStore.set(store);
}
