"use client";
import { FC, ReactElement, useRef } from "react";
import Image from "next/image";
import { Brand, FiturBenefit, Testimony } from "./store";
import { Icon } from "@iconify/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const BenefitSection: FC = (): ReactElement => {
  const carousel = useRef<AliceCarousel>(null);

  const cardProps = {
    mouseTrackingEnabled: true,
    disableButtonsControls: true,
    disableDotsControls: false,
    animationDuration: 1000,
    autoPlay: true,
    autoPlayInterval: 5000,
    infinite: true,
    items: Testimony.map((x, i) => (
      <div key={i} className="flex w-full">
        <section className="flex flex-col w-full h-full space-x-[10px] pt-8 px-8">
          <p className="text-white text-lg ">{x.desc}</p>
          <div className="flex items-center pt-8 gap-x-4">
            <div className="flex w-20 h-20 rounded-full bg-white"></div>
            <div className="flex flex-col">
              <p className="font-bold text-white">{x.name}</p>
              <p className="py-2 text-gray-500">{x.position}</p>
            </div>
          </div>
        </section>
      </div>
    )),
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1024: {
        items: 1,
        itemsFit: "contain",
      },
    },
  };

  return (
    <section
      id="about"
      className="flex flex-col w-full h-full 3xl:px-80 2xl:px-60 xl:px-32 lg:px-16 dark:bg-dark-blue-200 bg-gray-600 py-40 "
    >
      {/* Title */}
      <div className="flex flex-col gap-8 w-full items-center">
        <h1 className="text-white font-bold text-5xl">Why Choose Us?</h1>
        <p className="text-gray-600 font-semibold text-lg">
          We personalize how we work to fit your project needs. Our approach helps augment
          innovation.
        </p>
      </div>
      {/* Fitur Benefit */}
      <div className="flex gap-8 py-8  ">
        {FiturBenefit.map((x, i) => (
          <div key={i} className="flex flex-col gap-y-8 w-[330px]  items-center justify-center">
            <Image src={x.src} alt="fitur" width={32} height={32} />
            <p className="text-center text-white font-semibold text-2xl">{x.desc}</p>
          </div>
        ))}
      </div>
      {/* Banner */}
      <div className="flex gap-8 pt-20">
        <div className="flex flex-col p-20 gap-y-4 w-[40%] h-[423px] rounded-lg dark:bg-dark-blue-200 bg-gray-600 border border-gray-500 justify-center">
          <h1 className="text-blue-500 text-6xl font-extrabold">200 +</h1>
          <h1 className="text-white font-bold text-3xl">Clients Already Served</h1>
          <div className="flex  w-[265px] h-[100px] bg-white rounded-md mt-8 bg-opacity-10 text-white gap-x-2 p-4">
            <div className="flex flex-col">
              <p className="text-xs pb-2">REVIEWED ON</p>
              <Image src="/icon/clutch.svg" alt="icon" width={120} height={120} />
            </div>
            <div className="flex flex-col justify-between pl-4 pb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="flex flex-col text-yellow-300">
                    <Icon icon="ic:outline-star" />
                  </div>
                ))}
              </div>
              <p>49 Reviwes</p>
            </div>
          </div>
        </div>
        {/* Testimony */}
        <div className="flex flex-col w-[60%] h-[423px] flex rounded-lg bg-white bg-opacity-10 p-4">
          <div className="flex w-full mt-4 justify-between">
            <div className="flex justify-center items-center w-12 h-12 rounded-md bg-blue-600 ml-8 text-white">
              <Icon icon="ooui:quotes-ltr" width={25} />
            </div>
            <div className="flex gap-4">
              <button
                className="flex bg-white bg-opacity-10 w-8 h-8 rounded-full justify-center hover:bg-blue-600 items-center text-white"
                onClick={(e) => carousel?.current?.slidePrev(e)}
              >
                <Icon icon="ooui:next-rtl" width={15} />
              </button>
              <button
                className="flex bg-white bg-opacity-10 w-8 h-8 rounded-full justify-center hover:bg-blue-600 items-center text-white"
                onClick={(e) => carousel?.current?.slideNext(e)}
              >
                <Icon icon="ooui:next-ltr" width={15} />
              </button>
            </div>
          </div>
          <AliceCarousel {...cardProps} ref={carousel} />
        </div>
      </div>
      {/* Brand */}
      <div className="grid grid-cols-6 gap-x-8 pt-40">
        {Brand.map((x, i) => (
          <div
            key={i}
            className="flex w-full 2xl:h-[120px] lg:h-[60px] justify-center items-center rounded-md border dark:bg-dark-blue-200 bg-gray-600 hover:bg-white hover:bg-opacity-10 border border-gray-500"
          >
            <Image src={x.src} alt="brand" width={200} height={80} />
          </div>
        ))}
      </div>
    </section>
  );
};
