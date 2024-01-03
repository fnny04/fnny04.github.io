import "react-quill/dist/quill.snow.css";
import { FieldValues, useController } from "react-hook-form";
import { TControlledTextArea } from "../type";
import { ReactElement, useMemo } from "react";
import dynamic from "next/dynamic";
export const ControlledTextEditor = <T extends FieldValues>(
  props: TControlledTextArea<T>,
): ReactElement => {
  const { field } = useController(props);
  const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);
  return (
    <div>
      <label className="block text-gray-500 font-medium text-sm mb-2">
        {props.label}
        {props.required && <span className="text-red-700 text-sm"> *</span>}
      </label>
      <ReactQuill theme="snow" {...field} className={props.className} />
    </div>
  );
};
