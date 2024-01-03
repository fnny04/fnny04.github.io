"use client";
import { NextPage } from "next";
import { PropsWithChildren, ReactElement } from "react";
import { Sidebar } from "@/components";

const DashboardLayout: NextPage = (props: PropsWithChildren): ReactElement => {
  return (
    <section className="flex w-full min-h-screen bg-white overflow-x-auto">
      <Sidebar />
      <div className="pr-6 py-12 pl-2 sm:ml-60 w-full gap-y-10 flex flex-col overflow-x-auto ">
        {props.children}
      </div>
    </section>
  );
};
export default DashboardLayout;
