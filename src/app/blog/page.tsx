import type { Metadata } from "next";
import { Reveal } from "@/components/site/reveal";
import { getBloggerPosts } from "@/lib/blogger";
import type { BlogPostPage } from "@/lib/blogger-types";
import { BlogPostsClient } from "./blog-posts-client";

export const metadata: Metadata = {
  title: "Blog | Prosopon",
  description:
    "Latest Prosopon posts on transformation delivery, advisory, governance, and practical execution.",
  openGraph: {
    title: "Blog | Prosopon",
    description:
      "Read Prosopon notes on delivery discipline, transformation execution, and advisory work.",
  },
};

export default async function BlogPage() {
  const postsPage = await getInitialPosts();

  return (
    <>
      <section className="page-section section-hero-noir pt-24 sm:pt-32">
        <div className="container-prosopon">
          <Reveal>
            <p className="label-mono mb-6">Prosopon notes</p>
            <h1 className="hero-title max-w-5xl">Thinking for transformation work that has to hold.</h1>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Published perspectives on execution discipline, operating models, governance, and
              practical technology adoption.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-section section-parchment">
        <div className="container-prosopon">
          <BlogPostsClient
            initialError={postsPage.error}
            initialNextPageToken={postsPage.nextPageToken}
            initialPosts={postsPage.posts}
          />
        </div>
      </section>
    </>
  );
}

async function getInitialPosts(): Promise<BlogPostPage & { error?: string }> {
  try {
    return await getBloggerPosts({ limit: 9 });
  } catch (error) {
    console.error("Blog page posts failed to load", error);

    return {
      posts: [],
      nextPageToken: "",
      error: "Blog posts could not be loaded right now.",
    };
  }
}
