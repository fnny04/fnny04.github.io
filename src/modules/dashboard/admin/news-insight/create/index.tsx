"use client";
import { FC, Fragment, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  ControlledFieldDate,
  ControlledFieldSelect,
  ControlledFieldTags,
  ControlledFieldText,
  ControlledTextArea,
  ControlledTextEditor,
  ImageDropzone,
  Toast,
} from "@/components";
import { useRouter } from "next/navigation";
import { useCreateArticle, useUploadFile } from "../hook";
export const CreateNewsModule: FC = (): ReactElement => {
  const { mutate: createData } = useCreateArticle();
  const { mutate: uploadImage } = useUploadFile();

  const [toastOpen, setToastOpen] = useState<boolean>(false);
  const router = useRouter();
  const tagList = [
    { value: "ARTICLE", label: "Article" },
    { value: "NEWS", label: "News" },
  ];
  const handleToastClose = () => {
    setToastOpen(false);
  };

  const handleShowToast = () => {
    setToastOpen(true);
  };

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { isDirty: createDirty },
  } = useForm({
    mode: "all",
  });
  const tags = watch("tags", []);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tag = e.currentTarget.value.trim();
      if (tag) {
        setValue("tags", [...tags, tag]);
        e.currentTarget.value = "";
      }
    }
  };
  const handleRemoveTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setValue("tags", newTags);
  };
  console.log(watch("publish_date"));
  const doCreate = handleSubmit((data) => {
    uploadImage(
      {
        file: data.image_url,
        prefix: "article",
      },
      {
        onSuccess: ({ image_url }) => {
          createData(
            {
              id: data.id,
              title: data.title,
              excerpt: data.excerpt,
              description: data.description,
              content: data.content,
              image_url,
              type: data.type,
              publish_date: data.publish_date,
              tags: data.tags,
            },
            {
              onSuccess: () => {
                handleShowToast();
                setTimeout(() => {
                  router.push("/dashboard/news-insight");
                }, 600);
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
        message="Successfully Create Data"
        type="success"
      />
      <div className="text-lg font-bold  text-gray-500">
        <h1>Add Data News and Insight</h1>
      </div>
      <hr />
      <div className="">
        <form action="" className="flex flex-col gap-y-3">
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
          <div className="flex gap-x-2">
            <ControlledFieldSelect
              name="type"
              control={control}
              label="Type"
              required
              size="sm"
              options={tagList}
              placeholder="Choose a type"
            />
            <ControlledFieldTags
              name="tags"
              control={control}
              label="Tags"
              required
              size="sm"
              onKeyDown={handleKeyDown}
              tags={tags}
              onDeleteTag={handleRemoveTag}
            />
          </div>
          <div className="w-1/2">
            <ControlledFieldDate
              name="publish_date"
              control={control}
              label="Publish Date"
              required
              size="sm"
            />
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
              className="w-full h-32 outline-gray-400 border border-gray-200 rounded p-2 text-gray-600 bg-gray-50 mb-3"
            />
          </div>
          <div>
            <ControlledTextEditor
              required
              control={control}
              name="content"
              label="Content"
              className="h-64 text-gray-800 mb-16 "
            />
          </div>
          <div className="flex place-content-end gap-x-4">
            <Button disabled={!createDirty} type="button" onClick={doCreate} variant="success">
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
