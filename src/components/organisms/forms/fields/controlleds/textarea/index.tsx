import { FieldTextArea } from "@/components";
import { ReactElement } from "react";
import { FieldValues, useController } from "react-hook-form";
import { TControlledTextArea } from "../type";

export const ControlledTextArea = <T extends FieldValues>(
  props: TControlledTextArea<T>,
): ReactElement => {
  const { field } = useController(props);
  return <FieldTextArea {...{ ...props, ...field }} />;
};
