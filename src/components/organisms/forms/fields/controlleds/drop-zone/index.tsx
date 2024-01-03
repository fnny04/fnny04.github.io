import { ReactElement } from "react";
import { FieldValues, useController } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { TControlledFieldText } from "../type";
import Image from "next/image";
import { Icon } from "@iconify/react";
export const ImageDropzone = <T extends FieldValues>(
  props: TControlledFieldText<T>,
): ReactElement => {
  const { field } = useController(props);
  const onDrop = (acceptedFiles: File[]) => {
    field.onChange(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="mb-4">
      <label className="block text-gray-500 font-medium mb-2">
        {props.label}
        {props.required && <span className="text-red-700 text-sm"> *</span>}
      </label>
      <div className={`${props.defaultImage && "flex flex-col gap-y-2"}`}>
        <div
          {...getRootProps()}
          className={`flex flex-col justify-center items-center p-4 border border-dashed border-gray-400 rounded-md ${
            isDragActive ? "bg-gray-100" : "bg-white"
          }`}
        >
          <input {...getInputProps()} />
          <div className="text-gray-600">
            {isDragActive ? (
              <div className="flex flex-col w-full items-center justify-center gap-y-2">
                <h4>Drop the Image here ...</h4>
                <Icon icon="tabler:drag-drop" width={30} />
              </div>
            ) : (
              <div className="flex flex-col w-full items-center justify-center gap-y-2">
                <h4>{` Drag 'and' drop some Image here, or click to select Image`}</h4>
                <Icon icon="bi:image" width={30} />
              </div>
            )}
          </div>
        </div>

        {field.value && props.preview === true ? (
          <div className="w-1/2 mx-auto">
            <Image
              src={props?.defaultImage as string}
              alt="image"
              width={200}
              height={200}
              className="w-auto h-auto mx-auto"
              priority
            />
          </div>
        ) : (
          <ul className="mt-2">
            <li className="text-sm text-gray-700">{field.value?.[0].name}</li>
          </ul>
        )}
      </div>
    </div>
  );
};
