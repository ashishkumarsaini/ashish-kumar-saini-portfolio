import { Heading, HeadingLevel, HeadingSize, Text, TextSize } from "@/components/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { HashnodePost } from "./types";
import { formatPostDate, trimBrief } from "./utils";

type BlogCardProps = {
  index: number;
  post: HashnodePost;
};

export const BlogCard = ({ index, post }: BlogCardProps) => {
  return (
    <Link
      target="_blank"
      rel="noreferrer"
      href={post.url}
      className="group flex min-h-[320px] flex-col justify-between rounded-lg border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-xl hover:shadow-foreground/5"
    >
      <div>
        <div className="mb-8 flex items-start justify-between gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-muted font-bold">
            {String(index + 2).padStart(2, "0")}
          </span>
          <ArrowUpRight size={20} className="text-muted-foreground transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>{formatPostDate(post.publishedAt)}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
          <span>{post.readTimeInMinutes ?? 4} min read</span>
        </div>

        <Heading level={HeadingLevel.h3} size={HeadingSize.sm} className="mt-4 leading-tight">
          {post.title}
        </Heading>
        <Text size={TextSize.sm} className="mt-4 text-muted-foreground">
          {trimBrief(post.brief)}
        </Text>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {(post.tags ?? []).slice(0, 2).map((tag) => (
          <span key={tag.slug} className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            {tag.name}
          </span>
        ))}
      </div>
    </Link>
  );
};
