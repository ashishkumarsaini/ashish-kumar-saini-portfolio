export type HashnodePost = {
  id: string;
  url: string;
  title: string;
  brief: string;
  publishedAt?: string;
  readTimeInMinutes?: number;
  coverImage?: {
    url?: string;
  } | null;
  tags?: {
    name: string;
    slug: string;
  }[];
};

export type HashnodePostEdge = {
  node: HashnodePost;
};
