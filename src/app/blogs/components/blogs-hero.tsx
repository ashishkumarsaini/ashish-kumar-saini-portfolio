import { Heading, HeadingLevel, HeadingSize, Text, TextSize } from "@/components/typography";
import { BookOpen, Clock3, PenLine, Sparkles } from "lucide-react";

type BlogsHeroProps = {
  totalPosts: number;
  updatedAt: string;
};

export const BlogsHero = ({ totalPosts, updatedAt }: BlogsHeroProps) => {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/80 px-3 py-2 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
          <PenLine size={16} className="text-foreground" />
          Hashnode Blogs
        </div>
        <Heading level={HeadingLevel.h1} size={HeadingSize.xxxl} className="max-w-4xl text-4xl leading-tight sm:text-6xl lg:text-7xl lg:leading-[0.95]">
          Blogs that turn product problems into working systems.
        </Heading>
        <Text className="mt-6 max-w-2xl text-muted-foreground">
          Practical writing on frontend craft, architecture decisions, developer workflows, and the messy middle where ideas become shipped software.
        </Text>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 lg:pb-2">
        <div className="rounded-lg border bg-background/80 p-4 shadow-sm backdrop-blur">
          <BookOpen size={20} />
          <Text size={TextSize.xs} className="mt-5 text-muted-foreground">Published blogs</Text>
          <Heading level={HeadingLevel.h2} size={HeadingSize.sm}>{totalPosts}</Heading>
        </div>
        <div className="rounded-lg border bg-background/80 p-4 shadow-sm backdrop-blur">
          <Sparkles size={20} />
          <Text size={TextSize.xs} className="mt-5 text-muted-foreground">Curated from</Text>
          <Heading level={HeadingLevel.h2} size={HeadingSize.sm}>Hashnode</Heading>
        </div>
        <div className="rounded-lg border bg-background/80 p-4 shadow-sm backdrop-blur">
          <Clock3 size={20} />
          <Text size={TextSize.xs} className="mt-5 text-muted-foreground">Synced at</Text>
          <Heading level={HeadingLevel.h2} size={HeadingSize.sm}>{updatedAt}</Heading>
        </div>
      </div>
    </div>
  );
};
