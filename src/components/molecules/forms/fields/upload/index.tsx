import { UploadImage, Fieldset } from "@/components";
import { ReactElement, forwardRef } from "react";
import { TUploadFile } from "../type";

export const FieldUpload = forwardRef<HTMLInputElement, TUploadFile>((props, ref): ReactElement => {
  return (
    <Fieldset {...props}>
      <UploadImage {...props} ref={ref} />
    </Fieldset>
  );
});

FieldUpload.displayName = "FieldUpload";
