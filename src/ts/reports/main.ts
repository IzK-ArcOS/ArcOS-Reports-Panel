import { writable } from "svelte/store";
import { pb } from "../pb/main";
import type { ReportRecord } from "./interface";

export const Reports = writable<ReportRecord[]>();

let REPORT_CACHE: ReportRecord[];
let CACHE_LIFE = 0;

const MAX_CACHE_LIFE = 20;

pb.collection("bugrep").subscribe("*", async () => {
  Reports.set([]);
  Reports.set(await GetReports());
});

export async function GetReports() {
  if (REPORT_CACHE && REPORT_CACHE.length) {
    console.log("Going to return CACHE", CACHE_LIFE);
    CACHE_LIFE++;

    if (CACHE_LIFE > MAX_CACHE_LIFE) {
      REPORT_CACHE = [];
      CACHE_LIFE = 0;

      console.log("Expired, no longer returning CACHE.");
    } else return REPORT_CACHE;
  }

  console.log("Returning fresh sample.");

  const reports = await pb.collection("bugrep").getFullList<ReportRecord>({
    $autoCancel: false,
    sort: "-created",
    br: "true",
    expand: "comments.author",
  });

  if (!REPORT_CACHE || !REPORT_CACHE.length) REPORT_CACHE = reports;

  return REPORT_CACHE;
}
