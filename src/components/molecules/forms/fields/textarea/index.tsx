import { InputTextArea, Fieldset } from "@/components";
import { ReactElement, forwardRef } from "react";
import { TFieldTextArea } from "../type";

export const FieldTextArea = forwardRef<HTMLTextAreaElement, TFieldTextArea>(
  (props, ref): ReactElement => {
    return (
      <Fieldset {...props}>
        <InputTextArea {...props} ref={ref} />
      </Fieldset>
    );
  },
);

FieldTextArea.displayName = "FieldTextArea";
