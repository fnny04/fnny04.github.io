import { ReactNode } from "react";

export type TToastProps = {
  id?: string;
  type?: "success" | "warning" | "error" | "info";
  message?: string;
  duration?: number;
  position?: TToastPosition;
  icon?: ReactNode;
  onClose: () => void;
  show?: boolean;
};

export type TToastPosition =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomRight"
  | "bottomCenter"
  | "bottomLeft";

export type RequiredToastProps = Required<TToastProps>;
