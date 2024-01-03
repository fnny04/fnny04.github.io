import { TCommonForms, TInput, TTextArea, TUploadImage } from "@/entities";

export type TOption<T = string | number> = {
  label: string;
  value: T;
};

export type TFieldText = TInput & Omit<TCommonForms, "text">;
export type TFieldTextArea = TTextArea & Omit<TCommonForms, "text">;
export type TUploadFile = TUploadImage & Omit<TCommonForms, "text">;
