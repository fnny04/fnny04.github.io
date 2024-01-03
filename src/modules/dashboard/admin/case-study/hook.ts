import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TMetaErrorResponse } from "@/entities";
import { TDeactivatedCaseStudy, TUpdateCaseStudy } from "./type";
import { UpdateCaseStudy, CreateCaseStudy, DeactivatedCaseStudy, DeleteCaseStudy } from "./api";
import { TCaseStudy } from "@/modules/landing/case-study-section/types";
export const useUpdateDataCaseStudy = (): UseMutationResult<
  TCaseStudy,
  TMetaErrorResponse,
  TUpdateCaseStudy,
  unknown
> => {
  return useMutation({
    mutationKey: ["update-data-case-study"],
    mutationFn: async (payload) => await UpdateCaseStudy(payload),
  });
};
export const useCreateCaseStudy = (): UseMutationResult<
  TCaseStudy,
  TMetaErrorResponse,
  TUpdateCaseStudy,
  unknown
> => {
  return useMutation({
    mutationKey: ["create-case-study"],
    mutationFn: async (payload) => await CreateCaseStudy(payload),
  });
};

export const useDeactivatedDataCaseStudy = (): UseMutationResult<
  TCaseStudy,
  TMetaErrorResponse,
  TDeactivatedCaseStudy,
  unknown
> => {
  return useMutation({
    mutationKey: ["deactivated-data-case-study"],
    mutationFn: async (payload) => await DeactivatedCaseStudy(payload),
  });
};
export const useDeleteCaseStudy = (): UseMutationResult<
  TCaseStudy,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ["delete-data-case-study"],
    mutationFn: async (id) => await DeleteCaseStudy(id),
  });
};
