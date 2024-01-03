import { api } from "@/libs";
import { TArticles, TArticlesItems } from "./types";

export const GetArticles = async (): Promise<TArticles> => {
  const { data } = await api.get<TArticles>("/articles");
  return data;
};

export const GetDetailArticles = async (id: string): Promise<TArticlesItems> => {
  const { data } = await api.get<TArticlesItems>(`/articles/${id}`);
  return data;
};
