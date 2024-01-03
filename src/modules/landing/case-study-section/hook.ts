import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TCaseStudy, TCaseStudyItem } from "./types";
import { TMetaErrorResponse } from "@/entities";
import { GetDataCaseStudy, GetDetailDataCaseStudy } from "./api";

export const useGetCaseStudy = (): UseQueryResult<TCaseStudy, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["getCaseStudy"],
    queryFn: async () => await GetDataCaseStudy(),
  });
};

export const useGetDetailCaseStudy = (
  id: string,
): UseQueryResult<TCaseStudyItem, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["getDetailCaseStudy", id],
    queryFn: async () => await GetDetailDataCaseStudy(id),
  });
};
