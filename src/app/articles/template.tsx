"use client";
import { NextPage } from "next";
import { PropsWithChildren, ReactElement } from "react";
import { Navigation } from "@/components/atoms/navbar";
import { Footer } from "@/components";

const ArticlesLayout: NextPage = (props: PropsWithChildren): ReactElement => {
  return (
    <section className="flex flex-col w-full h-full 3xl:px-80 2xl:px-60 xl:px-32 lg:px-16 bg-cover dark:bg-dark-blue-100 bg-gray-600 overflow-x-hidden ">
      <Navigation />
      {props.children}
    </section>
  );
};
export default ArticlesLayout;
