"use client";
import { FC, ReactElement, Suspense } from "react";
import { useGetCaseStudy } from "./hook";
import Image from "next/image";
import { Search } from "@/components";
import Link from "next/link";
import { BreadCrumb } from "@/components/atoms/bread-crumb";

export const AllCaseStudy: FC = (): ReactElement => {
  const { data: caseStudy } = useGetCaseStudy();
  const detailBreadcrumb = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "All Case Study",
      link: "/case-study",
    },
  ];
  return (
    <section className="flex flex-col">
      <div className="py-20">
        <BreadCrumb items={detailBreadcrumb} />
      </div>
      <div className="flex justify-between ">
        <h1 className="text-white font-bold text-5xl">Case Study</h1>
        <div className="w-[30%]">
          <Search placeholder="Search" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 py-20">
        {caseStudy
          ?.filter((x) => x.is_publish)
          .map((x, i) => (
            <Suspense key={i} fallback={<h1 className="text-4xl">Sedang loading</h1>}>
              <Link href={`/case-study/${x.slug}`}>
                <div className="flex flex-col bg-white justify-between bg-opacity-10 shadow-lg  rounded cursor-pointer">
                  <figure>
                    <Image
                      src={x.image_url || ""}
                      alt={x.title}
                      width={1000}
                      height={1000}
                      className="w-full h-[300px] rounded-lg"
                    />
                  </figure>
                  <div className="p-4 text-white font-normal">
                    <h2 className="text-md font-bold">{x.title}</h2>
                    <h5 className="text-sm text-gray-400">{x.excerpt}</h5>
                    <div className="py-2">
                      <p className="truncate text-justify">{x.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Suspense>
          ))}
      </div>
    </section>
  );
};
