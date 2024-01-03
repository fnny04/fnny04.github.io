import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TArticles, TArticlesItems } from "./types";
import { TMetaErrorResponse } from "@/entities";
import { GetArticles, GetDetailArticles } from "./api";

export const useGetArticles = (): UseQueryResult<TArticles, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["getArticles"],
    queryFn: async () => await GetArticles(),
  });
};

export const useGetDetailArticles = (
  id: string,
): UseQueryResult<TArticlesItems, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["getDetailCaseStudy", id],
    queryFn: async () => await GetDetailArticles(id),
  });
};
