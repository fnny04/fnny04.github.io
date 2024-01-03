import { TCommonForms, TTextArea } from "@/entities";

export type TInputTextArea = TTextArea & Pick<TCommonForms, "size" | "status">;
