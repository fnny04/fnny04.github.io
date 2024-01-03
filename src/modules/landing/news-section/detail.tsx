"use client";
import { FC, ReactElement, Suspense } from "react";
import { useGetDetailArticles } from "./hook";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import { BreadCrumb } from "@/components/atoms/bread-crumb";

export const DetailArticles: FC = (): ReactElement => {
  const { slug } = useParams();
  const pathname = usePathname();
  const { data: detail } = useGetDetailArticles(slug as string);
  console.log(detail);
  const detailBreadcrumb = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "All Articles",
      link: "/articles",
    },
    {
      name: "Detail",
      link: pathname,
    },
  ];
  return (
    <Suspense fallback="loading....">
      <figure>
        <Image
          src={(detail?.image_url as string) || ""}
          alt={detail?.title as string}
          width={1000}
          height={1000}
          className="absolute w-full h-[600px] py-8 bg-cover left-0 z-0"
        />
      </figure>
      <div className="absolute w-screen left-0 pt-24 bg-dark-blue-100 flex flex-col z-30 h-[650px] bg-opacity-30 overflow-y-hidden">
        <div className="flex flex-col h-full justify-center 3xl:px-80 2xl:px-60 xl:px-32 lg:px-16">
          <div className="flex justify-between py-12 ">
            <BreadCrumb items={detailBreadcrumb} bgColor="bg-transparent" />
          </div>
          <h1 className=" font-bold text-5xl">{detail?.title}</h1>

          <div className=" py-8 text-lg">{detail?.type}</div>
          <div className="flex gap-4 items-center ">
            <div className="rounded-full w-16 h-16 bg-white "></div>
            <p className="font-bold">Jerome Belle</p>
          </div>
        </div>
      </div>
      <div className="pt-[600px]">
        <h1 className="text-5xl font-bold py-8">{detail?.title}</h1>
        <p>{detail?.description}</p>
      </div>
    </Suspense>
  );
};
