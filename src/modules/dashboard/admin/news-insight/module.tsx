"use client";
import { FC, ReactElement } from "react";
import Link from "next/link";
import { TableArticles } from "./table";
export const NewsInsightModule: FC = (): ReactElement => {
  return (
    <section className="w-full">
      <div className="mb-8">
        <div className="text-sm text-[#1D122D] font-bold">
          <Link href="/dashboard" className="font-bold">
            Home
          </Link>
          <span className="text-gray-400"> / </span>
          <Link href="/dashboard/case-study">News & Insight</Link>
        </div>
      </div>
      <hr />
      <div className="my-4">
        <TableArticles />
      </div>
    </section>
  );
};
