import type { BlogPost } from "@/lib/blogger-types";
import { cn } from "@/lib/utils";
import { BlogPostCard } from "./blog-post-card";

interface BlogPostGridProps {
  posts: BlogPost[];
  className?: string;
}

export function BlogPostGrid({ posts, className }: BlogPostGridProps) {
  return (
    <div
      className={cn(
        "grid justify-center gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,20rem),22rem))]",
        className,
      )}
    >
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
