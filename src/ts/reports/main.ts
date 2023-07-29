import { writable } from "svelte/store";
import { pb } from "../pb/main";
import type { ReportRecord } from "./interface";

export const Reports = writable<ReportRecord[]>();

pb.collection("bugrep").subscribe("*", async () => {
  Reports.set([]);
  Reports.set(await GetReports());
});

export async function GetReports() {
  return await pb
    .collection("bugrep")
    .getFullList<ReportRecord>({ $autoCancel: false, sort: "-created" });
}
