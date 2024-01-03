"use client";
import { FC, Fragment, ReactElement, Suspense } from "react";
import { useGetDetailCaseStudy } from "./hook";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import { BreadCrumb } from "@/components/atoms/bread-crumb";

export const DetailCaseStudy: FC = (): ReactElement => {
  const { slug } = useParams();
  const pathname = usePathname();
  const { data: detail } = useGetDetailCaseStudy(slug as string);
  console.log(detail);
  const detailBreadcrumb = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "All Case Study",
      link: "/case-study",
    },
    {
      name: "Detail",
      link: pathname,
    },
  ];
  return (
    <Fragment>
      <section className="flex flex-col h-auto overflow-y-hidden">
        <div className="flex justify-between py-20">
          <BreadCrumb items={detailBreadcrumb} />
        </div>
        <h1 className="text-white font-bold text-5xl">{detail?.title}</h1>

        <figure>
          <Image
            src={detail?.image_url as string}
            alt={detail?.title as string}
            width={1000}
            height={1000}
            className="absolute w-full h-[800px] py-8 bg-cover left-0"
          />
        </figure>
        <div className="pt-[820px] py-8 text-lg">{detail?.description}</div>
      </section>
    </Fragment>
  );
};
