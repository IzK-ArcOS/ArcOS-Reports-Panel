export enum UptimeState {
  offline = 0,
  online = 1,
  pending = 2,
  maintenance = 3,
}

export type Uptime = { [id: number]: UptimeState };

export interface UptimeResponse {
  heartbeatList: { [id: number]: Heartbeat[] };
  uptimeList: { [id: number]: number };
}

export interface Heartbeat {
  status: UptimeState;
  time: string;
  msg?: string;
  ping: number;
}
