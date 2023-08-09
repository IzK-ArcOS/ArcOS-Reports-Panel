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
