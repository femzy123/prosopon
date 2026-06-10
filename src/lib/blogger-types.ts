export interface BlogPost {
  id: string;
  title: string;
  url: string;
  published: string;
  excerpt: string;
  imageUrl: string;
}

export interface BlogPostPage {
  posts: BlogPost[];
  nextPageToken: string;
}
