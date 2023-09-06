import axios, { AxiosError } from "axios";
import { pb } from "../pb/main";

export async function createReportIssue(
  id: string,
  password: string
): Promise<number> {
  if (!pb.authStore.model) return 400;

  let status = 200;

  try {
    const req = await axios.post(`https://brissue.arcapi.nl/issue?id=${id}`, {
      identity: pb.authStore.model.username as string,
      password,
    });

    status = req.status;
  } catch (e) {
    const err = e as AxiosError;

    status = err.response ? err.response.status || 200 : 200;
  }

  return status;
}
