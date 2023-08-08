import {
  UptimeState,
  type Heartbeat,
  type Uptime,
  type UptimeResponse,
} from "./interface";
import { UPTIME_CAPTIONS, UPTIME_URL } from "./store";

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

      console.log(`${UPTIME_CAPTIONS[id].name} = ${UptimeState[result[id]]}`);
    }

    return result;
  } catch {
    return result;
  }
}
