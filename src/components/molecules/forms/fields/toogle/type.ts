import { ChangeEventHandler } from "react";
import { TCommonForms, TInput } from "@/entities";
export type TSwitcher = {
  isChecked?: boolean;
  defaultValue?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export type TFieldCheckbox = Omit<TInput, "size" | "type"> &
  Omit<TCommonForms, "preppend" | "append">;
