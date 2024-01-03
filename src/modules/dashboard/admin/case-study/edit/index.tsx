"use client";
import { FC, Fragment, ReactElement, useEffect, useMemo, useState } from "react";
import {
  Button,
  ControlledFieldText,
  ControlledTextArea,
  ImageDropzone,
  Toast,
} from "@/components";
import { useUpdateDataCaseStudy } from "../hook";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { useGetDetailCaseStudy } from "@/modules/landing/case-study-section/hook";
import { useUploadFile } from "../../news-insight/hook";

export const EditCaseStudyModule: FC = (): ReactElement => {
  const { mutate: updateData } = useUpdateDataCaseStudy();
  const { mutate: uploadImage } = useUploadFile();
  const { id } = useParams();
  const router = useRouter();
  const [toastOpen, setToastOpen] = useState<boolean>(false);
  const { data } = useGetDetailCaseStudy(id as string);
  const {
    control: updateControl,
    handleSubmit: updateSubmit,
    formState: { isDirty: UpdateDirty },
    reset: updateReset,
    watch,
  } = useForm({
    mode: "all",
  });
  const doUpdate = updateSubmit((data) => {
    try {
      uploadImage(
        {
          file: data.image_url,
          prefix: "case-study",
        },
        {
          onSuccess: ({ image_url }) => {
            updateData(
              {
                id: data.id,
                title: data.title,
                excerpt: data.excerpt,
                description: data.description,
                image_url,
              },
              {
                onSuccess: () => {
                  handleShowToast();
                  setTimeout(() => {
                    router.push("/dashboard/case-study");
                  }, 500);
                  updateReset();
                },
              },
            );
          },
        },
      );
    } catch (error) {
      throw new Error("failed");
    }
  });

  const handleToastClose = () => {
    setToastOpen(false);
  };

  const handleShowToast = () => {
    setToastOpen(true);
  };
  useEffect(() => {
    updateReset(data);
  }, [data]);
  return (
    <Fragment>
      <Toast
        show={toastOpen}
        onClose={handleToastClose}
        position="topRight"
        message="Successfully Update Data"
        type="success"
      />
      <div className="text-lg font-bold  text-gray-500">
        <h1>Edit Data Case Study</h1>
      </div>
      <hr className="" />
      <div className=" w-full mx-auto">
        <form action="" onSubmit={doUpdate} className="flex flex-col gap-y-2">
          <div className="flex gap-x-2">
            <div className="w-1/2">
              <ControlledFieldText
                size="sm"
                type="text"
                control={updateControl}
                name="title"
                label="Title"
                placeholder="Enter New title"
              />
            </div>
            <div className="w-1/2">
              <ControlledFieldText
                size="sm"
                type="text"
                control={updateControl}
                name="excerpt"
                label="Excerpt"
                placeholder="Enter New Excerpt"
              />
            </div>
          </div>

          <div className="w-full">
            <ImageDropzone
              type="file"
              control={updateControl}
              name="image_url"
              label="Image"
              defaultImage={watch("image_url")}
              preview={true}
            />
          </div>

          <div>
            <ControlledTextArea
              required
              size="sm"
              control={updateControl}
              name="description"
              label="Description"
              placeholder="Enter New Description"
              className="w-full h-72 outline-gray-400 border border-gray-200 rounded p-2 text-gray-600 bg-gray-50"
            />
          </div>
          <div className="flex place-content-end gap-x-4">
            <Button disabled={!UpdateDirty} type="submit" variant="success">
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
