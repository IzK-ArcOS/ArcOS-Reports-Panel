import admin from "../assets/branding/adminIcon.png";
import development from "../assets/branding/devIcon.svg";
import esr from "../assets/branding/esr.png";
import rc from "../assets/branding/rc.png";
import siege from "../assets/branding/siegeIcon.png";
import release from "../assets/branding/systemIcon.svg";
import unstable from "../assets/branding/unstIcon.png";
import uwu from "../assets/branding/uwuIcon.png";

type MODE =
  | "admin"
  | "development"
  | "esr"
  | "rc"
  | "siege"
  | "release"
  | "unstable"
  | "uwu";

export function getLogo(mode: MODE) {
  return (
    { admin, development, esr, rc, siege, release, unstable, uwu }[mode] ||
    release
  );
}
