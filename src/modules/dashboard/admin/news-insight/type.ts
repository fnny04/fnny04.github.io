export type TArticles = Array<TArticleItem>;

export type TArticleItem = {
  id: string;
  title: string;
  slug?: string;
  excerpt: string;
  description: string;
  content: string;
  publish_date?: string;
  tags: string[];
  type?: string;
  image_url?: string;
  is_publish?: boolean;
  is_deleted?: boolean;
  file?: File[];
};
export type TDeactivatedArticle = {
  id: string;
  is_publish: boolean;
};

export type TUploadFileRequest = {
  file: File[];
  id?: string;
  prefix: string;
};

export type TUploadFileResponse = {
  file_name: string;
  file_url: string;
  image_url?: string;
  mime: string;
};
