"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { useGetCaseStudy } from "../landing/case-study-section/hook";

import { TDataCardItem } from "./admin/type";
import { useGetArticles } from "./admin/news-insight/hook";

export const DashboardModule: FC = (): ReactElement => {
  const { data: caseStudy } = useGetCaseStudy();
  const { data: articles } = useGetArticles();

  const dataItems: TDataCardItem[] = [
    {
      name: "Total Case Study",
      total: caseStudy?.length,
      icon: (
        <Icon
          icon="fluent:document-search-32-filled"
          width={40}
          className="text-cyan-500 bg-cyan-300 p-1 rounded"
        />
      ),
      color: "bg-cyan-200",
    },
    {
      name: "Total News and Insight",
      total: articles?.length,
      icon: (
        <Icon
          icon="fluent:news-20-filled"
          width={40}
          className="text-green-500 bg-green-300 p-1 rounded"
        />
      ),
      color: "bg-green-200",
    },
  ];

  const dataAnalytics = [
    {
      name: "Visitor",
      total: 200,

      icon: <Icon icon="carbon:view-filled" width={20} className="text-white " />,
    },
    {
      name: "Customer",
      total: 200,

      icon: <Icon icon="el:group" width={20} className="text-white " />,
    },
    {
      name: "Interest",
      total: 200,

      icon: <Icon icon="fontisto:like" width={20} className="text-white " />,
    },
    {
      name: "Message",
      total: 200,

      icon: <Icon icon="ant-design:message-filled" width={20} className="text-white " />,
    },
  ];

  return (
    <section className="text-gray-600">
      <div className="mb-8">
        <div className="text-sm  text-[#1D122D] font-bold">
          <Link href="/dashboard" className="font-bold">
            Home
          </Link>
        </div>
      </div>
      <hr className="my-2" />
      <div className="w-full p-4 rounded-md bg-[#1D122D] h-40">
        <div className="text-white font-bold text-2xl">
          <h1>Welcome To Admin Management </h1>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 rounded-2xl bg-gray-50 h-fit p-4 w-[97%] border border-gray-50 -mt-12 z-20 mx-auto">
        <section className="flex gap-x-4 h-full">
          {dataItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col bg- gap-y-2 w-1/4 h-1/2  ${item.color} justify-center rounded-lg text-gray-600 p-4`}
            >
              <span>{item.icon}</span>
              <h2 className="font-bold tex-md">{item.name}</h2>
              <h3 className="font-bold text-2xl">{item.total}</h3>
            </div>
          ))}
        </section>
        <section>
          <div className=" flex items-center gap-x-1 text-lg font-bold my-3">
            <h2>Analitycs</h2>
            <span>
              <Icon icon="ion:analytics-sharp" width={20} className="text-blue-500" />
            </span>
          </div>
          <div className="flex gap-x-2">
            {dataAnalytics.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-y-2  bg- justify-center h-1/2 rounded-lg w-1/2 p-2 bg-gradient-to-r from-[#1D122D] via-[#2c1c46] to-[#332053] text-white`}
              >
                <div className="flex gap-x-1 items-center">
                  <span>{item.icon}</span>
                  <h2 className="font-medium text-lg">{item.name}</h2>
                </div>
                <h3>{item.total}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
