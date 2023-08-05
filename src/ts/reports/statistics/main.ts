import type { ReportRecord } from "../interface";
import { GetReports } from "../main";
import type { ReportStatistics } from "./interface";

export async function getReportsStats(): Promise<ReportStatistics> {
  const reports = await GetReports();

  if (!reports) return;

  const result: ReportStatistics = {
    opened: reports.filter((r) => !r.closed).length,
    closed: reports.filter((r) => r.closed).length,
    resolved: reports.filter((r) => r.resolved).length,
    total: reports.length,
    apis: getApiCount(reports),
  };

  return result;
}

export function getApiCount(reports: ReportRecord[]) {
  const known = [];
  let count = 0;

  for (let i = 0; i < reports.length; i++) {
    const api = reports[i].api;

    if (!api || known.includes(api)) continue;

    count++;
    known.push(api);
  }

  return count;
}
