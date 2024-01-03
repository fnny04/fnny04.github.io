"use client";

import { FC, ReactElement, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useGetCaseStudy } from "./hook";

export const CaseStudySection: FC = (): ReactElement => {
  const [index, setIndex] = useState(0);
  const { data: caseStudy } = useGetCaseStudy();
  const filteredCaseStudy = caseStudy?.filter((item) => item.is_publish) || [];
  const adjustedIndex = index >= filteredCaseStudy.length ? 0 : index;

  return (
    <section
      id="case-studies"
      className="relative 3xl:px-80 2xl:px-60 xl:px-32 lg:px-16 2xl:pb-[960px] lg:pb-[700px] w-full h-auto dark:bg-dark-gray-100 bg-gray-500"
    >
      <div className="flex flex-col h-full pt-40 xl:w-[50%] lg:[40%] lg:w-full text-white gap-y-10">
        <h1 className="text-5xl font-bold">Case Studies</h1>
      </div>
      <div className="flex justify-between py-12">
        <div className="w-[40%]">
          <p className="text-lg font-medium text-gray-500">
            We bring real solutions to each client’s problems through a deep understanding of their
            market, solution, and vision.
          </p>
        </div>
        <Link href="/case-study">
          <button className="bg-trasparent hover:bg-blue-500 font-semibold border border-blue-500 text-blue-500 hover:text-white rounded-md w-[300px] h-[50px]">
            See All Case Studies
          </button>
        </Link>
      </div>

      <div>
        <Image
          src={filteredCaseStudy?.[adjustedIndex]?.image_url as string}
          width={1000}
          height={800}
          className="absolute w-full h-screen bg-cover left-0"
          alt="bg-image"
        />

        <div className="absolute w-full h-screen bg-gray-800 bg-opacity-50 bg-cover left-0">
          <div className="absolute z-10 inset-y-0 top-40 left-80 flex gap-4 ">
            <button
              className="flex bg-white bg-opacity-50 w-8 h-8 rounded-full justify-center items-center text-white"
              onClick={() =>
                index === 0
                  ? setIndex((caseStudy?.length as number) - 1)
                  : setIndex((prev) => prev - 1)
              }
            >
              <Icon icon="ooui:next-rtl" width={20} />
            </button>
            <button
              className="flex bg-white bg-opacity-50 w-8 h-8 rounded-full justify-center items-center text-white"
              onClick={() =>
                index === Number(caseStudy?.length) - 1 ? setIndex(0) : setIndex((prev) => prev + 1)
              }
            >
              <Icon icon="ooui:next-ltr" width={20} />
            </button>
          </div>

          <div className="absolute z-10 inset-y-0 w-[526px] h-[425px] bg-white transition ease-in-out duration-700 rounded-md top-60 left-80 flex flex-col justify-center p-10 gap-y-8">
            <motion.div
              className="relative z-0"
              key={adjustedIndex}
              initial={{ x: -200 }}
              transition={{
                x: -100,
              }}
              animate={{
                x: 0,
              }}
              exit={{ x: 0, opacity: 1, zIndex: 0 }}
            >
              <Image
                src={filteredCaseStudy?.[adjustedIndex]?.image_url as string}
                width="80"
                height="80"
                alt="Case Studi 1"
              />
              <h1 className="text-black font-bold text-3xl py-4">
                {filteredCaseStudy?.[adjustedIndex]?.title}
              </h1>
              <p className="text-gray-500 text-sm font-thin py-2">
                {filteredCaseStudy?.[adjustedIndex]?.excerpt}
              </p>
              <div className="w-full border border-1"></div>
              <p className="py-4 text-gray-700">
                {filteredCaseStudy?.[adjustedIndex]?.description}
              </p>
              <Link href={`/case-study/${filteredCaseStudy?.[adjustedIndex]?.slug}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-semibold rounded-md w-full max-w-[120px] h-[50px]">
                  View case study
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
