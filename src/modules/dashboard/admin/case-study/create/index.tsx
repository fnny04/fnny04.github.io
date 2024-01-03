"use client";

import { FC, Fragment, ReactElement, useState } from "react";
import { useCreateCaseStudy } from "../hook";
import { useForm } from "react-hook-form";
import {
  Button,
  ControlledFieldText,
  ControlledTextArea,
  ImageDropzone,
  Toast,
} from "@/components";
import { useRouter } from "next/navigation";
import { useUploadFile } from "../../news-insight/hook";

export const CreateCaseStudyModule: FC = (): ReactElement => {
  const router = useRouter();
  const { mutate: createData } = useCreateCaseStudy();
  const { mutate: uploadImage } = useUploadFile();
  const [toastOpen, setToastOpen] = useState<boolean>(false);
  const handleToastClose = () => {
    setToastOpen(false);
  };

  const handleShowToast = () => {
    setToastOpen(true);
  };

  const {
    control,
    handleSubmit: createSubmit,
    reset,
    formState: { isDirty: createDirty },
  } = useForm({
    mode: "all",
  });
  const doCreate = createSubmit((data) => {
    uploadImage(
      {
        file: data.image_url,
        prefix: "case-study",
      },
      {
        onSuccess: ({ image_url }) => {
          createData(
            {
              id: data.id,
              title: data.title,
              excerpt: data.excerpt,
              description: data.description,
              image_url,
              is_publish: true,
              is_deleted: false,
            },
            {
              onSuccess: () => {
                handleShowToast();
                setTimeout(() => {
                  router.push("/dashboard/case-study");
                }, 500);
                reset();
              },
            },
          );
        },
      },
    );
  });
  return (
    <Fragment>
      <Toast
        show={toastOpen}
        onClose={handleToastClose}
        position="topRight"
        message="Successfully Create data"
        type="success"
      />
      <div className="text-lg font-bold mb-2 text-gray-500">
        <h1>Add Data Case Study</h1>
      </div>
      <hr className="my-2" />
      <div className="">
        <form action="" onSubmit={doCreate} className="flex flex-col gap-y-3">
          <div className=" flex gap-x-2">
            <div className="w-1/2">
              <ControlledFieldText
                required
                size="sm"
                type="text"
                control={control}
                name="title"
                label="Title"
                placeholder="Enter title"
                width={500}
              />
            </div>
            <div className="w-1/2">
              <ControlledFieldText
                required
                size="sm"
                type="text"
                control={control}
                name="excerpt"
                label="Excerpt"
                placeholder="Enter Excerpt"
              />
            </div>
          </div>

          <div className="w-full">
            <ImageDropzone
              required
              type="file"
              control={control}
              name="image_url"
              label="Image"
              preview={false}
            />
          </div>

          <div>
            <ControlledTextArea
              required
              size="sm"
              control={control}
              name="description"
              label="Description"
              placeholder="Enter Description"
              className="w-full h-72 outline-gray-400 border border-gray-200 rounded p-2 text-gray-600 bg-gray-50"
            />
          </div>
          <div className="flex place-content-end gap-x-4">
            <Button disabled={!createDirty} type="submit" variant="success">
              Submit
            </Button>
            <Button type="button" onClick={() => router.back()} variant="cancel">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
