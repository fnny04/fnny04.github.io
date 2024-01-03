import { Card } from "@/components/molecules/card";
import { FC, ReactElement } from "react";
import { CardSevices } from "./store";
import Image from "next/image";

export const ServiceSection: FC = (): ReactElement => {
  return (
    <section
      id="services"
      className="w-full h-full dark:bg-dark-gray-100 bg-gray-500 3xl:px-80 2xl:px-60 xl:px-32 lg:px-16"
    >
      <div className="flex flex-col h-full py-40 text-white gap-y-10">
        <h1 className="text-5xl font-semibold">Our Service</h1>
        <div className="flex justify-between">
          <div className="w-2/3">
            <p className="text-lg font-medium text-gray-500">
              We are focused on helping brands grow through digital transformation services. We
              bring real solutions to each client’s problems through a deep understanding of their
              market, solution, and vision.
            </p>
          </div>
          <button className="bg-trasparent hover:bg-blue-500 font-semibold border border-blue-500 text-blue-500 hover:text-white rounded-md w-[300px] h-[50px]">
            See All Services
          </button>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {CardSevices.map((x: any, i: any) => (
            <section key={i}>
              <div className="relative top-10 ml-14 w-20 h-20 rounded-md bg-blue-500 flex justify-center items-center">
                <Image src={x.icon} alt="icon" width={40} height={40} />
              </div>
              <Card
                title={x.title}
                titleStyle="text-2xl font-bold"
                className="2xl:p-16 lg:p-12 2xl:h-[250px] lg:h-[220px] bg-opacity-10 hover:border hover:border-gray-500"
              >
                <div className="text-md font-thin"> {x.desc}</div>
              </Card>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};
