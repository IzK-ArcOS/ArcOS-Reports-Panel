import type { Record } from "pocketbase";

export interface Report {
  api?: string;
  author: string;
  body: string;
  closed: boolean;
  desktop: boolean;
  frontend: string;
  id: string;
  issueid: string;
  location: Location;
  log: string;
  mode_file: Mode;
  resolved: boolean;
  title: string;
  useragent: string;
  userdata?: object;
  version: string;
  metaenv: MetaEnv;
  created: string;
  updated: string;
  comments: string[];
  expand: {
    comments: Comment[];
  };
}

export type ReportGroups = { [key: string]: ReportRecord[] };

export type ReportRecord = Report & Record;

export type Mode =
  | "release"
  | "development"
  | "unstable"
  | "siege"
  | "rc"
  | "admin";

export interface MetaEnv {
  BASE_URL: string;
  DEV: boolean;
  MODE: "development" | "production";
  PROD: boolean;
  SSR: boolean;
}

export interface Comment {
  author: string;
  body: string;
  created: string;
  updated: string;
  id: string;
  expand: {
    author: User;
  };
}

export interface User {
  authorname: string;
  created: string;
  email: string;
  emailVisiblity: boolean;
  fullname: string;
  id: string;
  scope: string[];
  updated: string;
  username: string;
  verified: boolean;
}

export type CommentRecord = Comment & Record;
export type UserRecord = User & Record;
