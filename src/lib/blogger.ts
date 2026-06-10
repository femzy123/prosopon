import "server-only";

import type { BlogPost, BlogPostPage } from "@/lib/blogger-types";

const BLOGGER_BLOG_ID = "6123990784782496325";
const BLOGGER_POSTS_ENDPOINT = `https://www.googleapis.com/blogger/v3/blogs/${BLOGGER_BLOG_ID}/posts`;
const BLOGGER_REVALIDATE_SECONDS = 600;

interface BloggerPost {
  id?: string;
  title?: string;
  url?: string;
  published?: string;
  content?: string;
  summary?: string;
  images?: Array<{ url?: string }>;
}

interface BloggerPostListResponse {
  items?: BloggerPost[];
  nextPageToken?: string;
}

interface GetBloggerPostsOptions {
  limit?: number;
  pageToken?: string;
}

export async function getBloggerPosts({
  limit = 9,
  pageToken,
}: GetBloggerPostsOptions = {}): Promise<BlogPostPage> {
  const apiKey = process.env.GOOGLE_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("Missing GOOGLE_API_KEY");
  }

  const url = new URL(BLOGGER_POSTS_ENDPOINT);
  url.searchParams.set("key", apiKey);
  url.searchParams.set("maxResults", String(limit));
  url.searchParams.set("orderBy", "published");
  url.searchParams.set("sortOption", "descending");
  url.searchParams.set("fetchBodies", "false");
  url.searchParams.set("fetchImages", "true");
  url.searchParams.set("status", "live");
  url.searchParams.set("fields", "items(id,title,url,published,images/url),nextPageToken");

  if (pageToken) {
    url.searchParams.set("pageToken", pageToken);
  }

  const response = await fetch(url, {
    next: { revalidate: BLOGGER_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`Blogger API request failed with status ${response.status}`);
  }

  const data = (await response.json()) as BloggerPostListResponse;

  return {
    posts: (data.items ?? []).map(normalizePost).filter((post): post is BlogPost => Boolean(post)),
    nextPageToken: data.nextPageToken ?? "",
  };
}

function normalizePost(post: BloggerPost): BlogPost | null {
  if (!post.id || !post.title || !post.url || !post.published) {
    return null;
  }

  return {
    id: post.id,
    title: post.title,
    url: post.url,
    published: post.published,
    excerpt: getExcerpt(post),
    imageUrl: getImageUrl(post),
  };
}

function getExcerpt(post: BloggerPost) {
  const source = post.summary || post.content || "";

  if (!source) {
    return "";
  }

  const text = source
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= 150) {
    return text;
  }

  return `${text.slice(0, 147).trim()}...`;
}

function getImageUrl(post: BloggerPost) {
  const imageUrl = post.images?.find((image) => isHttpUrl(image.url))?.url;

  return imageUrl ?? "";
}

function isHttpUrl(value: unknown): value is string {
  return typeof value === "string" && (value.startsWith("https://") || value.startsWith("http://"));
}
