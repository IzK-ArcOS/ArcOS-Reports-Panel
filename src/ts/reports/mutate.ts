import { pb } from "../pb/main";

export async function deleteReport(id: string): Promise<boolean> {
  return await pb.collection("bugrep").delete(id);
}
