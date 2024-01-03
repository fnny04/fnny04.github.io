import { InputCheckbox } from "@/components";
import { ReactElement, forwardRef, useState } from "react";
import { TFieldCheckbox } from "./type";
import clsx from "clsx";

export const FieldToogle = forwardRef<HTMLInputElement, TFieldCheckbox>(
  (props, ref): ReactElement => {
    const [isChecked, setIschecked] = useState<boolean>(props.checked as boolean);
    const switcherStyles = clsx(
      "w-10 h-6 bg-gray-300 rounded-full p-1 transition duration-300 ease-in-out ",
      {
        "bg-green-500": isChecked,
      },
    );
    const dotStyle = clsx(
      " bg-white w-4 h-4 rounded-full translate-x-0 shadow-md transform duration-300 ease-in-out",
      {
        "translate-x-4": isChecked,
      },
    );
    return (
      <label htmlFor={`${props.name}-${props.id}`} className="flex items-center cursor-pointer">
        <InputCheckbox
          {...props}
          ref={ref}
          className="hidden"
          checked={props.checked}
          onClick={() => setIschecked((prev) => !prev)}
          onChange={props.onChange}
        />
        <div className={switcherStyles}>
          <div className={dotStyle}></div>
        </div>
      </label>
    );
  },
);

FieldToogle.displayName = "FieldToogle";
