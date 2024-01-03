import React, { FC, ReactElement } from "react";

const FullScreenLoader: FC = (): ReactElement => {
  return (
    <div className="fixed top-0 bg-dark-blue-100 left-0 w-full h-full flex flex-col gap-y-8 items-center justify-center z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      <h1 className="text-white">Loading ...</h1>
    </div>
  );
};

export default FullScreenLoader;
