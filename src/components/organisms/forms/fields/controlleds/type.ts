import { TFieldText, TFieldTextArea } from "@/components/molecules/forms/fields/type";

import { FieldValues, UseControllerProps } from "react-hook-form";

export type TControlledFieldText<T extends FieldValues> = UseControllerProps<T> & TFieldText;
export type TControlledTextArea<T extends FieldValues> = UseControllerProps<T> & TFieldTextArea;
