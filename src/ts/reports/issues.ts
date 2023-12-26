import { get } from "svelte/store";
import type { GitHubIssue } from "./interfaces/github";
import { Reports } from "./main";
import sleep from "../sleep";

let ISSUE_CACHE: GitHubIssue[] = [];

export async function getReportIssue(id: string): Promise<GitHubIssue> {
  const report = get(Reports).filter((a) => id == a.id)[0];

  if (!report) return null;

  let issues: GitHubIssue[] = [];

  if (ISSUE_CACHE.length) issues = [...ISSUE_CACHE];
  else {
    issues = (await (
      await fetch(
        "https://api.github.com/repos/IzK-ArcOS/ArcOS-Frontend/issues?per_page=100"
      )
    ).json()) as GitHubIssue[];

    if (!issues.length) return null;
  }

  ISSUE_CACHE = [...issues];

  await sleep(100);

  if (!issues.length) return null;

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].body.includes(`br$${report.issueid}`)) return issues[i];
  }

  return null;
}
