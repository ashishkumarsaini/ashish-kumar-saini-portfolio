import { Heading, HeadingLevel, HeadingSize, Text, TextSize } from "@/components/typography";
import { BlogCard } from "./blog-card";
import { HashnodePostEdge } from "./types";

type RecentBlogsSectionProps = {
  posts: HashnodePostEdge[];
};

export const RecentBlogsSection = ({ posts }: RecentBlogsSectionProps) => {
  return (
    <section className="mx-auto max-w-6xl pb-20">
      <div className="mb-7 flex flex-col justify-between gap-4 border-b pb-5 sm:flex-row sm:items-end">
        <div>
          <Text size={TextSize.xs} className="font-bold uppercase tracking-wide text-muted-foreground">
            More writing
          </Text>
          <Heading level={HeadingLevel.h2} size={HeadingSize.lg} className="mt-2">
            Recent essays and field notes
          </Heading>
        </div>
        <Text size={TextSize.xs} className="max-w-sm text-muted-foreground sm:text-right">
          Ten latest posts, refreshed daily from the publication.
        </Text>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {posts.map(({ node }, index) => (
          <BlogCard key={node.id} index={index} post={node} />
        ))}
      </div>
    </section>
  );
};
