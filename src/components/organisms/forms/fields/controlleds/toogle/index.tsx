import { FieldToogle } from "@/components";
import { ReactElement } from "react";
import { FieldValues, useController } from "react-hook-form";
import { TControlledFieldText } from "./type";

export const ControlledFieldToogle = <T extends FieldValues>(
  props: TControlledFieldText<T>,
): ReactElement => {
  const { field } = useController(props);
  return <FieldToogle {...{ ...props, ...field }} onChange={(e) => console.log(e.target)} />;
};
