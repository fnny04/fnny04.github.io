import { TagsInput, Fieldset } from "@/components";
import { ReactElement, forwardRef } from "react";
import { TFieldText } from "../type";

export const FieldTags = forwardRef<HTMLInputElement, TFieldText>((props, ref): ReactElement => {
  return (
    <Fieldset {...props}>
      <TagsInput {...props} ref={ref} />
    </Fieldset>
  );
});

FieldTags.displayName = "FieldText";
