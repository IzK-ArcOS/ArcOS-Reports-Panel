import closedIcon from "../../assets/report/closed.svg";
import issuedIcon from "../../assets/report/issued.svg";
import normalIcon from "../../assets/report/normal.svg";
import resolvedIcon from "../../assets/report/resolved.svg";
import type { Report } from "./interface";
import { getReportIssue } from "./issues";

export async function getIcon(report: Report): Promise<[string, string]> {
  if (report.closed) return ["archived", closedIcon];

  if (report.resolved) return ["resolved", resolvedIcon];

  if (await getReportIssue(report.id)) return ["issued", issuedIcon];

  return ["normal", normalIcon];
}
