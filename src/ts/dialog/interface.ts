export interface Dialog {
  title: string;
  message: string;
  buttons: Button[];
  image?: string;
}

export interface Button {
  caption: string;
  action: () => any;
  className?: string;
}

export type DiagStore = { [key: string]: Dialog };
