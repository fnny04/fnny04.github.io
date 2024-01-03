export type TUpdateCaseStudy = {
  id: string;
  title: string;
  slug?: string;
  excerpt: string;
  description: string;
  image_url?: string;
  is_publish?: boolean;
  is_deleted?: boolean;
  file?: File[];
};

export type TDeactivatedCaseStudy = {
  id?: string;
  is_publish: boolean;
};
