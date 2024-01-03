"use client";
import { FC, ReactElement } from "react";
import Link from "next/link";
import { TableCaseStudies } from "./table";

export const CaseStudyModule: FC = (): ReactElement => {
  return (
    <section className="w-full">
      <div className="mb-8">
        <div className="text-sm text-[#1D122D] font-bold">
          <Link href="/dashboard" className="font-bold">
            Home
          </Link>
          <span className="text-gray-400"> / </span>
          <Link href="/dashboard/case-study">Case Study</Link>
        </div>
      </div>
      <hr />
      <div className="my-4">
        <TableCaseStudies />
      </div>
    </section>
  );
};
