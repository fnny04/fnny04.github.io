"use client";

import { ChangeEvent, FC, ReactElement, useCallback, useMemo, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { useGetCaseStudy } from "@/modules/landing/case-study-section/hook";
import { TUpdateCaseStudy } from "../type";
import { useDeactivatedDataCaseStudy, useDeleteCaseStudy } from "../hook";
import { Button, DataTable, Modal, FieldToogle, Toast } from "@/components";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";

export const TableCaseStudies: FC = (): ReactElement => {
  const { data: caseStudy, refetch, isLoading } = useGetCaseStudy();
  const { mutate: activatedData } = useDeactivatedDataCaseStudy();
  const { mutate: deleteData } = useDeleteCaseStudy();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentId, setCurrentId] = useState<string>("");
  const [isDeleteModalShow, setIsDeleteModalShow] = useState<boolean>(false);
  const [toastOpen, setToastOpen] = useState<boolean>(false);
  const router = useRouter();
  const handleDeleteData = (): void => {
    deleteData(currentId, {
      onSuccess: () => {
        refetch();
        setTimeout(() => {
          handleShowToast();
        }, 100);
        setIsDeleteModalShow(false);
      },
    });
  };

  const handleToogle = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: string) => {
      activatedData(
        {
          id,
          is_publish: e.target.checked,
        },
        {
          onSuccess: () => {
            setTimeout(() => {
              refetch();
            }, 400);
          },
        },
      );
    },
    [activatedData, refetch],
  );

  const handleToastClose = () => {
    setToastOpen(false);
  };

  const handleShowToast = () => {
    setToastOpen(true);
  };

  const handleSeacrh = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
  };

  type Unpacked<T> = T extends (infer U)[] ? U : T;
  const columns = useMemo<ColumnDef<Unpacked<TUpdateCaseStudy>>[]>(
    () => [
      {
        header: "No",
        accessorKey: "no",
        cell: ({ row }) => row.index + 1,
      },
      {
        header: "Title",
        accessorKey: "title",
        cell: ({ getValue }) => {
          return getValue();
        },
      },
      {
        header: "Status",
        accessorKey: "is_publish",
        cell: ({ getValue }) => {
          const value = Boolean(getValue<boolean>());
          return value === true ? (
            <div className="bg-green-500 w-1/2 text-sm px-2 py-1 text-center text-white rounded-lg">
              Publish
            </div>
          ) : (
            <div className="bg-yellow-500 w-1/2 text-white text-sm px-2 py-1 text-center rounded-lg">
              Unpublish
            </div>
          );
        },
      },
      {
        header: "Action",
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-x-2" key={row.original.id}>
              <Button
                onClick={() => {
                  router.push(`/dashboard/case-study/${row.original.slug}`);
                }}
                type="button"
                className="bg-emerald-500 text-gray-100 p-1 rounded"
                title="Edit"
              >
                <Icon icon="bx:edit" width={15} />
              </Button>
              <Button
                onClick={() => {
                  setCurrentId(row.original.id);
                  setIsDeleteModalShow(true);
                }}
                type="button"
                className="bg-red-600 text-gray-100 p-1 rounded"
                title="Delete"
              >
                <Icon icon="fluent:delete-12-regular" width={15} />
              </Button>
              <FieldToogle
                id={`${row.original.id}`}
                name="is_publish"
                checked={row.original.is_publish}
                onChange={(e) => handleToogle(e, row.original.id)}
              />
            </div>
          );
        },
      },
    ],
    [handleToogle, router],
  );
  return (
    <>
      <section className="flex w-full h-full min-h-screen">
        <Toast
          show={toastOpen}
          onClose={handleToastClose}
          position="topRight"
          message="Successfully"
          type="success"
        />

        <DataTable
          isLoading={isLoading}
          redirect={() => router.push("/dashboard/case-study/create")}
          columns={columns}
          handleSearch={handleSeacrh}
          data={
            caseStudy?.filter((x) => x.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
            []
          }
        />
      </section>
      {/*delete modal*/}
      <Modal
        isOpen={isDeleteModalShow}
        onClose={() => setIsDeleteModalShow(false)}
        width="400"
        height="150"
        key={"delete-modal"}
      >
        <div className="text-lg font-bold -mt-4 mb-2 text-gray-500">
          <h1>Delete Case Study</h1>
        </div>
        <hr className="my-2" />
        <div className="flex flex-col gap-y-7">
          <div className="text-lg text-gray-900 ">
            <h1>Are you sure want to delete data ?</h1>
          </div>
          <div className="flex place-content-end gap-x-4">
            <Button type="button" variant="error" onClick={handleDeleteData}>
              Delete
            </Button>
            <Button type="button" onClick={() => setIsDeleteModalShow(false)} variant="cancel">
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
