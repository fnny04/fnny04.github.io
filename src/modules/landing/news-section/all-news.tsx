"use client";
import { FC, ReactElement, Suspense, useState } from "react";
import { useGetArticles } from "./hook";
import Image from "next/image";
import { Search } from "@/components";
import Link from "next/link";
import { BreadCrumb } from "@/components/atoms/bread-crumb";
import { format } from "date-fns";
import { Icon } from "@iconify/react";

export const AllArticles: FC = (): ReactElement => {
  const { data: articles } = useGetArticles();
  const detailBreadcrumb = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "News & Insight",
      link: "/articles",
    },
  ];
  const [clickLike, setClickLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  const handleClickLike = () => {
    setClickLike(clickLike + 1);
  };

  const handleClickDislike = () => {
    setDisLike(disLike + 1);
  };

  return (
    <Suspense fallback="loading ....">
      <section className="flex flex-col">
        <div className="py-20">
          <BreadCrumb items={detailBreadcrumb} />
        </div>
        <div className="flex justify-between ">
          <h1 className="text-white font-bold text-5xl">Articles</h1>
          <div className="w-[30%]">
            <Search placeholder="Search" />
          </div>
        </div>

        {articles
          ?.filter((x) => x.is_publish)
          .map((x, i) => (
            <Suspense key={i} fallback={<h1 className="text-4xl">Sedang loading</h1>}>
              <div className="flex w-full bg-white my-12 bg-opacity-10 shadow-lg  rounded cursor-pointer">
                <Link href={`/articles/${x.slug}`}>
                  <figure>
                    <Image
                      src={x.image_url || ""}
                      alt={x.title}
                      width={1000}
                      height={1000}
                      className="w-full h-[350px] rounded-lg"
                    />
                  </figure>
                </Link>

                <div className="flex flex-col w-full justify-center p-8 justify-between text-white font-normal ">
                  <Link href={`/articles/${x.slug}`}>
                    <div className="flex gap-8">
                      <p className="text-md font-bold">{x.type}</p>
                      <div className="border-l bg-white"></div>
                      <p>{format(new Date(x.updated_at), "yyyy-MM-dd")}</p>
                    </div>
                    <div>
                      <h1 className="text-3xl py-4 font-bold">{x.title}</h1>
                      <p className="truncate text-justify text-gray-400 text-lg">{x.description}</p>
                    </div>
                  </Link>
                  <hr />

                  <div className="flex h-[40px]">
                    <div className="flex gap-4 items-center w-[80%] cursor-default">
                      <div className="rounded-full w-16 h-16 bg-white bg-opacity-10"></div>
                      <p className="font-bold">Jerome Belle</p>
                    </div>

                    <div>
                      <div className="flex gap-4">
                        <button
                          className="flex gap-2 justift-center items-center"
                          onClick={handleClickLike}
                        >
                          <Icon icon="iconamoon:like" width={30} /> {clickLike}
                        </button>
                        <button
                          className="flex gap-2 justift-center items-center"
                          onClick={handleClickDislike}
                        >
                          <Icon icon="iconamoon:dislike" width={30} /> {disLike}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Suspense>
          ))}
      </section>
    </Suspense>
  );
};
