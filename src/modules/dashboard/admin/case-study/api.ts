import { api } from "@/libs";

import { TCaseStudy } from "@/modules/landing/case-study-section/types";
import { TDeactivatedCaseStudy, TUpdateCaseStudy } from "./type";

export const UpdateCaseStudy = async (payload: TUpdateCaseStudy): Promise<TCaseStudy> => {
  const { data } = await api({
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    url: `/case-studies/${payload.id}`,
    data: payload,
  });

  return data;
};
export const CreateCaseStudy = async (payload: TUpdateCaseStudy): Promise<TCaseStudy> => {
  try {
    const { data } = await api({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/case-studies",
      data: payload,
    });

    return data;
  } catch (error) {
    console.error("Error creating case study:", error);
    throw error;
  }
};

export const DeleteCaseStudy = async (id: string) => {
  const { data } = await api.delete(`/case-studies/${id}`);
  return data;
};

export const DeactivatedCaseStudy = async (payload: TDeactivatedCaseStudy): Promise<TCaseStudy> => {
  const { data } = await api({
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    url: `/case-studies/${payload.id}/publish`,
    data: payload,
  });
  return data;
};
