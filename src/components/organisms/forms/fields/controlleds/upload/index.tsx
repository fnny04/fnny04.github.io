import { FieldUpload } from "@/components";
import { ReactElement } from "react";
import Image from "next/image";
import { FieldValues, useController } from "react-hook-form";
import { TControlledFieldText } from "../type";
import { Icon } from "@iconify/react/dist/iconify.js";

export const ControlledUploadFiles = <T extends FieldValues>(
  props: TControlledFieldText<T>,
): ReactElement => {
  const { field } = useController(props);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files?.[0];
      console.log(selectedFile);
      field.onChange(selectedFile);
    }
  };

  return (
    <div className={props.className}>
      {field.value && props.defaultImage === "" ? (
        <Image
          src={URL.createObjectURL(field.value)}
          alt=""
          width={200}
          height={200}
          className={`${props.preview ? props.previewImage : "hidden"}`}
        />
      ) : (
        <div>
          <Image
            src={props?.defaultImage || ""}
            alt=""
            width={200}
            height={200}
            className={props.previewImage}
          />
        </div>
      )}

      <div className="flex flex-col justify-center">
        <div className="flex">
          {props.label && <h3 className="font-bold text-xs text-left">{props.label}</h3>}
          {props.required && (
            <span className="relative ml-1 font-bold text-primary-green bottom-1">*</span>
          )}
        </div>
        <input
          type="file"
          accept="image/*,.pdf"
          id={props.name}
          name={props.name}
          onChange={handleFileChange}
          ref={field.ref}
          className="file:bg-primary-green file:text-primary-white file:rounded-[3px] file:border-none w-[59vw] md:w-[29vw] lg:w-[22vw] 2xl:w-[18vw] xl:w-[17vw] file:cursor-pointer"
          disabled={props.disabled}
        />
        <label
          htmlFor={props.name}
          className="flex justify-center items-center text-primary-white bg-primary-green w-[17vw] md:w-[10vw] px-1 lg:px-3 py-2 rounded cursor-pointer"
        >
          {field.value && !props.previewImage ? (
            <Icon icon="mingcute:check-line" className="text-2xl text-center" />
          ) : props.disabled ? (
            <Icon icon="mingcute:check-line" className="text-2xl text-center" />
          ) : (
            props.inputLabel
          )}
        </label>
        {props.message && (
          <span className="text-sm text-red-4 font-semibold relative mb-5 md:mb-0 -mt-5">
            {props.message}
          </span>
        )}
      </div>
    </div>
  );
};
