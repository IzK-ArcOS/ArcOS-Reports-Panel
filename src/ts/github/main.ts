import { Notification } from "../notification/main";

export async function tryGitHub() {
  const req = await (await fetch("https://api.github.com/")).json();

  const exceeded =
    req.message && req.documentation_url && req.message.includes("rate limit");

  if (exceeded)
    Notification({
      title: "No GitHub Connection",
      message:
        "The GitHub API rate limit for this IP address has exceeded. Functionality will be limited.",
    });

  return exceeded;
}
