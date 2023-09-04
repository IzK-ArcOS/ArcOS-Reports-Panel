import { writable } from "svelte/store";
import type { Heartbeat, Uptime, UptimeResponse } from "./interface";
import { UPTIME_URL } from "./store";

export const LiveUptimes = writable<Uptime>({});

export async function getUptimes(): Promise<Uptime> {
  const result: Uptime = {};

  try {
    const req = (await (await fetch(UPTIME_URL)).json()) as UptimeResponse;

    const heartbeats = Object.entries(req.heartbeatList) as [
      string,
      Heartbeat[]
    ][];

    for (let i = 0; i < heartbeats.length; i++) {
      const [id, beats] = heartbeats[i];

      result[id] = beats[beats.length - 1].status;
    }

    return result;
  } catch {
    return result;
  }
}

export function startLiveUptime() {
  async function tick() {
    LiveUptimes.set(await getUptimes());
  }

  setInterval(tick, 30000);
  tick();
}
