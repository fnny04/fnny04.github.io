import { ReactNode } from "react";

export type TCommonForms = {
  size?: "sm" | "md" | "lg";
  status?: "error" | "warning" | "success" | "none";
  message?: string;
  label?: string;
  append?: ReactNode;
  preppend?: ReactNode;
  text?: string;
  hint?: string;
  previewImage?: string;
  preview?: boolean;
  defaultImage?: string;
  inputLabel?: string;
  isChecked?: boolean;
  tags?: string[];
  onDeleteTag?: (tag: number) => void;
};
