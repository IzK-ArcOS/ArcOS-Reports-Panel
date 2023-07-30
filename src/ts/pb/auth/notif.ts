import { Notification } from "../../notification/main";

export function authNotification(username: string) {
  Notification({
    title: "Logged In",
    message: `Authentication succeeded as user ${username}.`,
  });
}
