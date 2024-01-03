import { FC, ReactElement } from "react";
import Image from "next/image";

export const AboutSection: FC = (): ReactElement => {
  return (
    <section
      id="about"
      className="flex w-full h-[750px]  3xl:px-80 2xl:px-60 xl:px-32 lg:px-16 dark:bg-dark-blue-200 bg-gray-600 items-center "
    >
      <div className="flex flex-col h-full justify-center xl:w-[40%] lg:[40%] lg:w-full text-white gap-y-10">
        <h1 className="text-5xl font-semibold">Award-Winning Software Company</h1>
        <p className="text-xl font-thin text-gray-300">
          We create diverse, complex, web and mobile solutions for any business need. With us you
          get quality software and perfect service every time.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-sm rounded-md w-full max-w-[120px] h-[50px]">
          More About Us
        </button>
      </div>
      <div className="relative right-0 pl-40 3xl:pt-80 2xl:pt-60 lg:pt-0 z-10 w-auto">
        <Image
          src="/landing/about-img.jpg"
          width="636"
          height="670"
          alt="About"
          className="rounded rounded-lg"
        />
      </div>
    </section>
  );
};
