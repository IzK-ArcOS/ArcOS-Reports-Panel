import { PARAMS } from "../env";
import { Notification } from "../notification/main";
import { pb } from "../pb/main";

export async function deleteReport(id: string): Promise<boolean> {
  Notification({
    title: `Deleting Report`,
    message: `Report ${id} is being permanently deleted from the Reports server.`,
  });

  return await pb.collection("bugrep").delete(id, PARAMS);
}

export async function archiveReport(
  id: string,
  resolve?: boolean
): Promise<boolean> {
  const body = resolve ? { closed: true, resolved: true } : { closed: true };

  Notification({
    title: `Archiving Report`,
    message: `Contacting the server to archive report with id ${id}...`,
  });

  return await pb.collection("bugrep").update(id, body, PARAMS);
}

export async function resolveReport(id: string): Promise<boolean> {
  Notification({
    title: `Resolving Report`,
    message: `Contacting the server to resolve and archive report with id ${id}...`,
  });

  return await pb
    .collection("bugrep")
    .update(id, { resolved: true, closed: true }, PARAMS);
}
