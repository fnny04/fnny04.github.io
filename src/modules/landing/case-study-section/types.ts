export type TCaseStudy = Array<TCaseStudyItem>;

export type TCaseStudyItem = {
  id: string;
  title: string;
  slug?: string;
  excerpt: string;
  description: string;
  image_url?: string;
  is_publish?: boolean;
  is_deleted?: boolean;
};
