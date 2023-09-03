import { Dialog } from "../../dialog/main";
import { Notification } from "../../notification/main";

export function authNotification(username: string) {
  Notification({
    title: "Mandatory login thingy",
    message: `Glad you made it, ${username}! Please don't abuse this panel, that'd make the team sad...`,
  });
}

export function scopeErrorDialog() {
  Dialog({
    title: "Well that sucks",
    message:
      "Can't access BugRep: your ArcPB account does not contain the required scopes for this resource. Please contact the Board if you believe this is an error.",
    buttons: [{ action() {}, caption: "OK" }],
  });
}
