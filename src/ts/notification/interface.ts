export interface Notif {
  title: string;
  message: string;
  image?: string;
}

export type NotifStore = { [key: string]: Notif };
