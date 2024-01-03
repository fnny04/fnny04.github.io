export type TArticles = Array<TArticlesItems>;

export type TArticlesItems = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  content: string;
  image_url?: string;
  type: string;
  publish_date: string;
  is_publish?: boolean;
  is_deleted?: boolean;
  created_at: string;
  updated_at: string;
};
