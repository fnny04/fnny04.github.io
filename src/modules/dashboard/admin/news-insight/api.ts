import { api } from "@/libs";
import { TArticleItem, TArticles, TDeactivatedArticle } from "./type";
import { TUploadFileRequest, TUploadFileResponse } from "./type";

export const GetArticlesData = async (): Promise<TArticles> => {
  const { data } = await api.get<TArticles>("/articles");
  return data;
};
export const GetDetailArticles = async (id: string): Promise<TArticleItem> => {
  const { data } = await api.get<TArticleItem>(`/articles/${id}`);
  return data;
};

export const CreateArticle = async (payload: TArticleItem): Promise<TArticles> => {
  try {
    const { data } = await api({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/articles",
      data: payload,
    });

    return data;
  } catch (error) {
    console.error("Error creating Article:", error);
    throw error;
  }
};
export const UpdateArticle = async (payload: TArticleItem): Promise<TArticles> => {
  const { data } = await api({
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    url: `/articles/${payload.id}`,
    data: payload,
  });

  return data;
};
export const DeactivatedArticle = async (payload: TDeactivatedArticle): Promise<TArticles> => {
  const { data } = await api({
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    url: `/articles/${payload.id}/publish`,
    data: payload,
  });
  return data;
};
export const DeleteArticle = async (id: string) => {
  const { data } = await api.delete(`/articles/${id}`);
  return data;
};
export const uploadFile = async (payload: TUploadFileRequest): Promise<TUploadFileResponse> => {
  const formData = new FormData();
  formData.append("file", payload.file?.[0]);
  const { data } = await api.post(`/storage/${payload.prefix}`, formData);
  return data;
};
