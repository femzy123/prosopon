"use client";

import { useState, useTransition } from "react";
import { BlogPostGrid } from "@/components/site/blog-post-grid";
import type { BlogPost, BlogPostPage } from "@/lib/blogger-types";

interface BlogPostsClientProps {
  initialPosts: BlogPost[];
  initialNextPageToken: string;
  initialError?: string;
}

export function BlogPostsClient({
  initialPosts,
  initialNextPageToken,
  initialError = "",
}: BlogPostsClientProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [nextPageToken, setNextPageToken] = useState(initialNextPageToken);
  const [error, setError] = useState(initialError);
  const [isPending, startTransition] = useTransition();

  function loadMore() {
    if (!nextPageToken || isPending) {
      return;
    }

    startTransition(async () => {
      setError("");

      try {
        const response = await fetch(
          `/api/blog/posts?limit=9&pageToken=${encodeURIComponent(nextPageToken)}`,
        );

        if (!response.ok) {
          throw new Error("Blog posts could not be loaded right now.");
        }

        const data = (await response.json()) as BlogPostPage;

        setPosts((currentPosts) => [...currentPosts, ...data.posts]);
        setNextPageToken(data.nextPageToken);
      } catch (loadError) {
        setError(
          loadError instanceof Error
            ? loadError.message
            : "Blog posts could not be loaded right now.",
        );
      }
    });
  }

  if (!posts.length && error) {
    return (
      <div className="parchment-card mx-auto max-w-2xl p-8 text-center">
        <p className="label-mono mb-4">Posts unavailable</p>
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="parchment-card mx-auto max-w-2xl p-8 text-center">
        <p className="label-mono mb-4">No posts yet</p>
        <p className="text-muted-foreground">New Prosopon notes will appear here when published.</p>
      </div>
    );
  }

  return (
    <>
      <BlogPostGrid posts={posts} />
      {error ? (
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-primary" role="alert">
          {error}
        </p>
      ) : null}
      {nextPageToken ? (
        <div className="mt-12 flex justify-center">
          <button className="gold-button" disabled={isPending} onClick={loadMore} type="button">
            {isPending ? "Loading..." : "Load more"}
          </button>
        </div>
      ) : null}
    </>
  );
}
