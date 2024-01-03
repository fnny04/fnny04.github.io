"use client";
import { FC, ReactElement, useRef } from "react";
import { Card } from "@/components/molecules/card";
import { Icon } from "@iconify/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useGetArticles } from "./hook";
import { format } from "date-fns";
import Link from "next/link";

export const NewsSection: FC = (): ReactElement => {
  const carousel = useRef<AliceCarousel>(null);
  const { data: articles } = useGetArticles();
  const cardProps = {
    mouseTrackingEnabled: true,
    disableButtonsControls: true,
    disableDotsControls: true,
    animationDuration: 1000,
    autoPlay: true,
    autoPlayInterval: 3000,
    infinite: true,
    items: articles?.map((x, i) => (
      <div key={i}>
        <Link href={`/articles/${x.slug}`}>
          <Card className="flex flex-row m-3 bg-opacity-10 2xl:h-[420px] lg:h-[350px] max-w-full hover:bg-blue-500 shadow-md px-4 space-x-[10px] p-8">
            <div className="flex-col justify-between w-full text-white">
              <div className="flex justify-between text-sm items-center">
                <p className="p-2 rounded-md bg-white  bg-opacity-10">{x.type}</p>
                <p>{format(new Date(x.updated_at), "yyyy-MM-dd")}</p>
              </div>
              <div className="flex flex-col justify-between">
                <p className="font-semibold text-3xl py-4 ">{x.title}</p>

                <p className="text-white font-extralight text-lg pt-[28px]">{x.description}</p>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    )),
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 3,
        itemsFit: "contain",
      },
    },
  };

  return (
    <section
      id="about"
      className="flex flex-col w-full h-screen 3xl:px-80 2xl:px-60 xl:px-32 lg:px-16 dark:bg-dark-gray-100 bg-gray-500 items-center gap-8 pt-20 "
    >
      <h1 className="text-white py-20 font-extrabold text-5xl">News & Insight</h1>
      <div className="w-full h-auto flex items-center">
        <button
          className="flex bg-white bg-opacity-10 w-8 h-8 rounded-full hover:bg-blue-600 justify-center items-center text-white px-2"
          onClick={(e) => carousel?.current?.slidePrev(e)}
        >
          <Icon icon="ooui:next-rtl" width={15} />
        </button>
        <AliceCarousel {...cardProps} ref={carousel} />
        <button
          className="flex bg-white bg-opacity-10 w-8 h-8 px-2 rounded-full hover:bg-blue-600 justify-center items-center text-white"
          onClick={(e) => carousel?.current?.slideNext(e)}
        >
          <Icon icon="ooui:next-ltr" width={15} />
        </button>
      </div>
      <Link href={"/articles"}>
        <button className="bg-trasparent hover:bg-blue-500 font-semibold border border-blue-500 text-blue-500 hover:text-white rounded-md w-[300px] h-[50px]">
          See All Articles
        </button>
      </Link>
    </section>
  );
};
