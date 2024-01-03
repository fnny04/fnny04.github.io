import React, { FC, ReactElement, useState } from "react";
import { ToggleSwitchProps } from "./type";
import clsx from "clsx";

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
  initialState = false,
  onChange,
}): ReactElement => {
  const [isChecked, setIsChecked] = useState(initialState);

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
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" className="hidden" checked={isChecked} onChange={onChange} />
      <div className={switcherStyles}>
        <div className={dotStyle}></div>
      </div>
    </label>
  );
};
