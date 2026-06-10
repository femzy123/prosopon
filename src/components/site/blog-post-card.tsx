/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight, Newspaper } from "lucide-react";
import type { BlogPost } from "@/lib/blogger-types";

interface BlogPostCardProps {
  post: BlogPost;
}

const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
  year: "numeric",
});

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="parchment-card group flex h-full min-h-[25rem] flex-col">
      <a
        aria-label={`Read ${post.title}`}
        className="flex h-full flex-col"
        href={post.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {post.imageUrl ? (
          <img
            alt=""
            className="h-48 w-full border-b border-border object-cover transition-transform duration-300 group-hover:scale-[1.025]"
            decoding="async"
            loading="lazy"
            src={post.imageUrl}
          />
        ) : (
          <div className="grid h-48 place-items-center border-b border-border bg-[linear-gradient(145deg,rgba(196,169,108,0.2),transparent_42%),var(--obsidian)] text-primary">
            <Newspaper aria-hidden="true" className="h-9 w-9" strokeWidth={1.5} />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          <p className="label-mono">{formatDate(post.published)}</p>
          <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-foreground">
            {post.title}
          </h3>
          {post.excerpt ? (
            <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
          ) : null}
          <span className="label-mono mt-auto inline-flex items-center gap-2 pt-8 transition-colors group-hover:text-foreground">
            Read post
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
          </span>
        </div>
      </a>
    </article>
  );
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return dateFormatter.format(date);
}
