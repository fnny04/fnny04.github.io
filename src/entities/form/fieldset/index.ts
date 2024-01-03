import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { TCommonForms } from "../common";

export type TOption<T = string | number> = {
  label: string;
  value: T;
};

export type TFieldSet = Omit<DetailedHTMLProps<any, any>, "size" | "type"> &
  TCommonForms &
  Pick<InputHTMLAttributes<HTMLInputElement>, "type">;
