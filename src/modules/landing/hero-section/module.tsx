"use client";
import { FC, ReactElement } from "react";
import { Icon } from "@iconify/react";
import Lottie from "lottie-react";
import Link from "next/link";
import animationData from "./Animation - 1704283422481.json";

export const HeroSection: FC = (): ReactElement => {
  return (
    <section
      id="home"
      className="flex w-full gap-4 h-screen items-center 3xl:px-80 2xl:px-60 xl:px-32 lg:px-16 bg-cover dark:bg-black bg-white bg-[url(/landing/hero-bg.svg)] bg-no-repeat bg-center items-center"
    >
      {/* Banner */}
      <div className="flex flex-col xl:w-[50%] lg:w-[70%] dark:text-white text-black gap-y-8 ">
        <div className="flex flex-col pr-16 gap-y-8 py-16 lg:py-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-full dark:bg-white bg-gray-800 hover:bg-blue-600 dark:bg-opacity-10">
              <Icon icon="bi:play-fill" className="text-white" width={20} />
            </div>
            <h2 className="2xl:text-2xl lg:text-xl font-bold">
              Software Developer
            </h2>
          </div>
          <div className="flex flex-col gap-y-4 2xl:text-6xl lg:text-5xl text-base font-bold ">
            <h1>
              Hallo I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-500">
                Fenny
              </span>{" "}
            </h1>
            <h1>Lets know </h1>
            <h1>about me</h1>
          </div>
        </div>
      </div>
      {/* Animation */}
      <div className="flex flex-col xl:w-[50%] lg:w-[70%] ">
        <Lottie animationData={animationData} loop autoplay />
        <Link href="https://lottiefiles.com">
          <p className="text-right text-xs text-white">
            Animation By
            <span className="text-blue-500">Lottiefiles</span>
          </p>
        </Link>
      </div>
    </section>
  );
};
