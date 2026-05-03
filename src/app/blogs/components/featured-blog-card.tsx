import { Heading, HeadingLevel, HeadingSize, Text, TextSize } from "@/components/typography";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import Link from "next/link";
import { HashnodePost } from "./types";
import { formatPostDate, trimBrief } from "./utils";

type FeaturedBlogCardProps = {
  post: HashnodePost;
};

export const FeaturedBlogCard = ({ post }: FeaturedBlogCardProps) => {
  return (
    <Link
      target="_blank"
      rel="noreferrer"
      href={post.url}
      className="group mt-12 grid overflow-hidden rounded-lg border bg-background shadow-xl shadow-foreground/5 transition duration-300 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="relative min-h-[260px] border-b bg-foreground p-6 text-background lg:border-b-0 lg:border-r">
        {post.coverImage?.url ? (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 transition duration-500"
            style={{ backgroundImage: `url(${post.coverImage.url})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.24),transparent_30%),linear-gradient(135deg,#111_0%,#2f4f4f_52%,#9c6f32_100%)]" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
        <div className="relative flex h-full min-h-[260px] flex-col justify-between">
          <span className="w-fit rounded-full bg-background px-3 py-1 text-xs font-bold uppercase tracking-wide text-foreground">
            Featured read
          </span>
          <div>
            <Text size={TextSize.xs} className="text-background/80">Latest from the archive</Text>
            <div className="mt-3 h-1 w-24 bg-background" />
          </div>
        </div>
      </div>

      <div className="flex min-h-[260px] flex-col justify-between p-6 sm:p-8">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={16} />
              {formatPostDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={16} />
              {post.readTimeInMinutes ?? 4} min read
            </span>
          </div>
          <Heading level={HeadingLevel.h2} size={HeadingSize.lg} className="mt-5 leading-tight transition group-hover:text-muted-foreground">
            {post.title}
          </Heading>
          <Text className="mt-4 text-muted-foreground">
            {trimBrief(post.brief, 210)}
          </Text>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {(post.tags ?? []).slice(0, 3).map((tag) => (
              <span key={tag.slug} className="rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                {tag.name}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-bold">
            Read article
            <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};
