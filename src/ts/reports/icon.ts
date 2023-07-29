import type { ReportRecord } from "./interface";
import normalIcon from "../../assets/report/normal.svg";
import resolvedIcon from "../../assets/report/resolved.svg";
import closedIcon from "../../assets/report/closed.svg";
import issuedIcon from "../../assets/report/issued.svg";
import { getReportIssue } from "./issues";

export async function getIcon(report: ReportRecord): Promise<string> {
  if (report.closed) return closedIcon;

  if (report.resolved) return resolvedIcon;

  if (await getReportIssue(report.id)) return issuedIcon;

  return normalIcon;
}
