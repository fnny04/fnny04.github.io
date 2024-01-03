import { inputClassName } from "@/utils";
import { forwardRef } from "react";
import { TUploadElement } from "./type";

export const UploadImage = forwardRef<HTMLInputElement, TUploadElement>(
  ({ size = "sm", ...props }, ref) => {
    return (
      <input
        className={inputClassName({ size, ...props })}
        id={props.name}
        data-testid="upload-file"
        {...props}
        ref={ref}
        onChange={(e) => e.target.files?.[0]}
      />
    );
  },
);

UploadImage.displayName = "UploadFile";
