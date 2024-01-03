import { inputClassName } from "@/utils";
import { forwardRef } from "react";
import { TInputTextArea } from "./type";

export const InputTextArea = forwardRef<HTMLTextAreaElement, TInputTextArea>(
  ({ size = "sm", ...props }, ref) => {
    return (
      <textarea
        className={inputClassName({ size, ...props })}
        id={props.name}
        data-testid="input-text"
        {...props}
        ref={ref}
      />
    );
  },
);

InputTextArea.displayName = "InputTextArea";
