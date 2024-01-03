import { FC, ReactElement } from "react";

export const BannerSection: FC = (): ReactElement => {
  return (
    <section
      id="about"
      className="flex flex-col w-full h-[500px] 3xl:px-80 2xl:px-60 xl:px-32 lg:px-16 dark:bg-dark-gray-100 bg-gray-500 items-center gap-8 pt-40"
    >
      <h1 className="text-gray-500 font-medium text-2xl">Ready to ge Started?</h1>
      <h1 className="text-white font-bold text-5xl">Launch Your Project with Us</h1>
      <button className="p-4 px-6 rounded-md bg-blue-600 hover:bg-blue-400 text-white font-semibold">
        Work with us
      </button>
    </section>
  );
};
