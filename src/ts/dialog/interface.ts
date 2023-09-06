export interface Dialog {
  title?: string;
  message?: string;
  element?: any;
  buttons?: Button[];
  image?: string;
  className?: string;
}

export interface Button {
  caption: string;
  action: () => any;
  className?: string;
}

export type DiagStore = { [key: string]: Dialog };
