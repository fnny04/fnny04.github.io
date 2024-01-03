import { LandingPageModule } from "@/modules/landing/module";
import { NextPage } from "next";
import { ReactElement, Suspense } from "react";

const Home: NextPage = (): ReactElement => {
  return (
      <LandingPageModule />
  );
};

export default Home;
