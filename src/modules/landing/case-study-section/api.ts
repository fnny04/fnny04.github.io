import { api } from "@/libs";
import { TCaseStudy, TCaseStudyItem } from "./types";

export const GetDataCaseStudy = async (): Promise<TCaseStudy> => {
  const { data } = await api.get<TCaseStudy>("/case-studies");
  return data;
};

export const GetDetailDataCaseStudy = async (id: string): Promise<TCaseStudyItem> => {
  const { data } = await api.get<TCaseStudyItem>(`/case-studies/${id}`);
  return data;
};
