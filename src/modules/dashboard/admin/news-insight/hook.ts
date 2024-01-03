import { TMetaErrorResponse } from "@/entities";
import {
  TArticleItem,
  TArticles,
  TDeactivatedArticle,
  TUploadFileRequest,
  TUploadFileResponse,
} from "./type";
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import {
  CreateArticle,
  DeactivatedArticle,
  DeleteArticle,
  GetArticlesData,
  GetDetailArticles,
  UpdateArticle,
  uploadFile,
} from "./api";

export const useGetArticles = (): UseQueryResult<TArticles, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["getArticles"],
    queryFn: async () => await GetArticlesData(),
  });
};

export const useCreateArticle = (): UseMutationResult<
  TArticles,
  TMetaErrorResponse,
  TArticleItem,
  unknown
> => {
  return useMutation({
    mutationKey: ["create-article"],
    mutationFn: async (payload) => await CreateArticle(payload),
  });
};

export const useDeactivatedArticle = (): UseMutationResult<
  TArticles,
  TMetaErrorResponse,
  TDeactivatedArticle,
  unknown
> => {
  return useMutation({
    mutationKey: ["deactivated-data-article"],
    mutationFn: async (payload) => await DeactivatedArticle(payload),
  });
};

export const useUploadFile = (): UseMutationResult<
  TUploadFileResponse,
  TMetaErrorResponse,
  TUploadFileRequest
> => {
  return useMutation({
    mutationKey: ["uploadFile"],
    mutationFn: async (file: TUploadFileRequest) => {
      return await uploadFile(file);
    },
  });
};
export const useGetDetailArticles = (
  id: string,
): UseQueryResult<TArticleItem, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["getDetail", id],
    queryFn: async () => await GetDetailArticles(id),
  });
};
export const useUpdateDataArticle = (): UseMutationResult<
  TArticles,
  TMetaErrorResponse,
  TArticleItem,
  unknown
> => {
  return useMutation({
    mutationKey: ["update-data-article"],
    mutationFn: async (payload) => await UpdateArticle(payload),
  });
};

export const useDeleteArticle = (): UseMutationResult<
  TArticles,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ["delete-data-article"],
    mutationFn: async (id) => await DeleteArticle(id),
  });
};
