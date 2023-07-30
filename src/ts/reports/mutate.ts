import { Notification } from "../notification/main";
import { pb } from "../pb/main";

export async function deleteReport(id: string): Promise<boolean> {
  Notification({
    title: `Deleting Report`,
    message: `Report ${id} is being permanently deleted from the Reports server.`,
  });

  return await pb.collection("bugrep").delete(id);
}
