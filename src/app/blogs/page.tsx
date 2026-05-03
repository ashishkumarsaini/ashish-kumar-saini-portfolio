import { BlogsHero, FeaturedBlogCard, HashnodePostEdge, RecentBlogsSection } from "./components";

const BlogsPage = async () => {
  const response = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 * 60 * 24 },
    body: JSON.stringify({
      query: `
        query Publication {
          publication(host: "blog.ashishkumarsaini.dev") {
            id
            isTeam
            title
            posts(first: 10) {
              totalDocuments
              edges {
                node {
                  id
                  title
                  brief
                  url
                  publishedAt
                  readTimeInMinutes
                  coverImage {
                    url
                  }
                  tags {
                    name
                    slug
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });

  const result = await response.json();
  const posts: HashnodePostEdge[] = result.data?.publication?.posts.edges || [];
  const totalPublishedPosts = result.data?.publication?.posts.totalDocuments ?? posts.length;
  const [featuredPost, ...remainingPosts] = posts;
  const updatedAt = new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());

  return (
    <div className="overflow-hidden">
      <section className="relative isolate pt-6 pb-14 sm:pt-10 sm:pb-18">
        <div className="absolute inset-x-0 top-0 -z-10 h-[430px] rounded-b-[2rem]" />
        <div className="absolute left-6 top-10 -z-10 hidden h-32 w-32 rounded-full border border-foreground/10 md:block" />
        <div className="absolute right-4 top-20 -z-10 hidden h-44 w-44 rounded-full border border-foreground/10 md:block" />

        <div className="mx-auto max-w-6xl">
          <BlogsHero totalPosts={totalPublishedPosts} updatedAt={updatedAt} />
          {featuredPost && <FeaturedBlogCard post={featuredPost.node} />}
        </div>
      </section>

      <RecentBlogsSection posts={remainingPosts} />
    </div>
  );
};

export default BlogsPage;
