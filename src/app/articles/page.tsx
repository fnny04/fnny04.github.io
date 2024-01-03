import { AllArticles } from "@/modules/landing/news-section";
import { NextPage } from "next";
import { ReactElement, Suspense } from "react";

const ArticlesPage: NextPage = (): ReactElement => {
  return (
    <Suspense fallback="Loading ...">
      <AllArticles />
    </Suspense>
  );
};

export default ArticlesPage;
