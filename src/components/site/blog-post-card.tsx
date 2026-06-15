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
  const hasImage = Boolean(post.imageUrl);

  return (
    <article className="group flex h-full min-h-88 flex-col bg-white text-(--obsidian) shadow-[0_18px_48px_rgba(0,0,0,0.16)] transition-[transform,box-shadow] duration-300 ease-out hover:scale-[1.025] hover:shadow-[0_30px_78px_rgba(196,169,108,0.32)]">
      <a
        aria-label={`Read ${post.title}`}
        className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        href={post.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {hasImage ? (
          <div className="h-48 overflow-hidden border-b border-[rgba(92,80,64,0.16)] bg-(--parchment)">
            <img
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.045]"
              decoding="async"
              loading="lazy"
              src={post.imageUrl}
            />
          </div>
        ) : (
          <span className="ml-8 mt-8 grid h-11 w-11 place-items-center rounded-full border border-[rgba(92,80,64,0.2)] text-primary transition-colors duration-300 group-hover:border-primary/70 group-hover:text-(--gold-bright) sm:ml-10 sm:mt-10">
            <Newspaper aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
          </span>
        )}
        <div className={`${hasImage ? "p-8 sm:p-10" : "mt-12 px-8 pb-8 sm:px-10 sm:pb-10"} flex flex-1 flex-col`}>
          <p className="label-mono text-primary">{formatDate(post.published)}</p>
          <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-(--obsidian)">
            {post.title}
          </h3>
          {post.excerpt ? (
            <p className="mt-4 text-base leading-relaxed text-(--umber)">{post.excerpt}</p>
          ) : null}
          <span className="label-mono mt-auto inline-flex items-center gap-2 pt-8 text-primary transition-colors group-hover:text-(--obsidian)">
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
