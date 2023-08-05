import { Dialog } from "../../dialog/main";
import { Notification } from "../../notification/main";

export function authNotification(username: string) {
  Notification({
    title: "Hi!",
    message: `Glad you made it, ${username}! Please don't abuse this panel, that'd make the team sad...`,
  });
}

export function scopeErrorDialog() {
  Dialog({
    title: "Well that sucks",
    message:
      "You don't have the scopes for this thing... Please contact the Board if you think this is an error.",
    buttons: [{ action() {}, caption: "OK" }],
  });
}
