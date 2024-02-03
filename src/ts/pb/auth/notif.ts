import { Dialog } from "../../dialog/main";
import { Notification } from "../../notification/main";

export function authNotification(username: string) {
  Notification({
    title: "Authorization",
    message: `Glad you made it, ${username}! Please don't abuse this panel, that'd make the team sad...`,
  });
}

export function scopeErrorDialog() {
  Dialog({
    title: "Insufficient permissions",
    message:
      "Can't access BugRep: your ArcPB account does not contain the required scopes for this resource. Please contact the Board if you believe this is an error.",
    buttons: [{ action() { }, caption: "OK" }],
  });
}

export function authFailed() {
  Dialog({
    title: "Authentication failed.",
    message:
      "The server did not permit the login attempt. Please check the entered credentials and try again.",
    buttons: [{ caption: "OK", action() { } }],
  });
}
