import { Dialog } from "../../dialog/main";
import { Notification } from "../../notification/main";

export function authNotification(username: string) {
  Notification({
    title: "Authentication",
    message: `Server authorization was successful for user ${username}. Welcome!`,
  });
}

export function scopeErrorDialog() {
  Dialog({
    title: "Authentication failed",
    message:
      "Your administrative account does not contain the required scopes to access this resource. Please contact the Board if you believe this is an error.",
    buttons: [{ action() {}, caption: "OK" }],
  });
}
