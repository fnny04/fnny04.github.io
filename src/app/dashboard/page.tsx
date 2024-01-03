import { NextPage } from "next";
import { ReactElement, Suspense } from "react";
import { DashboardModule } from "@/modules";
const DashboardHome: NextPage = (): ReactElement => {
  return (
    <Suspense fallback="Loading ...">
      <DashboardModule />
    </Suspense>
  );
};

export default DashboardHome;
