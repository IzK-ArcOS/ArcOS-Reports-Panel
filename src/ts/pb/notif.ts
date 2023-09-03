import { Dialog } from "../dialog/main";

export function passwordResetSent() {
  Dialog({
    title: "Check your inbox",
    message:
      "If there is a user associated with the account, you'll be receiving an email to reset your password shortly. When changed you can try logging in again.",
    buttons: [{ caption: "Okay", action() {} }],
  });
}

export function passwordResetInvalid() {
  Dialog({
    title: "Couldn't change password",
    message:
      "An error occured while sending the reset email. The account might not exist. Please check the information and try again.",
    buttons: [{ caption: "Okay", action() {} }],
  });
}
