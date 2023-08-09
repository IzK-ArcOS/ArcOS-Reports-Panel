import type { ReportGroups, ReportRecord } from "./interface";

export function groupReports(reports: ReportRecord[]): ReportGroups {
  const result: ReportGroups = {};

  for (let i = 0; i < reports.length; i++) {
    const report = reports[i];
    const title = report.title;

    if (result[title]) result[title].push(report);
    else result[title] = [report];
  }

  return result;
}
