import { FieldTags } from "@/components";
import { ReactElement } from "react";
import { FieldValues, useController } from "react-hook-form";
import { TControlledFieldText } from "../type";

export const ControlledFieldTags = <T extends FieldValues>(
  props: TControlledFieldText<T>,
): ReactElement => {
  const { field } = useController(props);
  return <FieldTags {...{ ...props, ...field }} />;
};
