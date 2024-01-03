"use client";
import { FC, Fragment, ReactElement } from "react";
import { Navbar } from "@/components";
import { HeroSection } from "./hero-section/module";
import { AboutSection } from "./about-section/module";
import { ServiceSection } from "./service-section/module";
import { BenefitSection } from "./benefit-section/module";
import { BannerSection } from "./banner-section/module";
import { NewsSection } from "./news-section/module";
import { CaseStudySection } from "./case-study-section/module";
import { Footer } from "@/components";

export const LandingPageModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
      {/* <AboutSection />
      <ServiceSection />
      <CaseStudySection />
      <BenefitSection />
      <BannerSection />
      <Footer /> */}
    </Fragment>
  );
};
