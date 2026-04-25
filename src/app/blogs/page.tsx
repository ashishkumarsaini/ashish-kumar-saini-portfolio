import { Heading, HeadingSize, Text } from "@/components/typography";
import Link from "next/link";

const BlogsPage = async () => {
  const response = await fetch('https://gql.hashnode.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 60 * 60 * 24 },
    body: JSON.stringify({
      query: `
        query Publication {
          publication(host: "blog.ashishkumarsaini.dev") {
            id
            isTeam
            title
            posts(first: 10) {
              edges {
                node {
                  id
                  title
                  brief
                  url
                }
              }
            }
          }
        }
      `
    }),
  });

  const result = await response.json();
  const posts = result.data?.publication?.posts.edges || [];
  const now = new Date().toLocaleTimeString();

  return (
    <div className="max-w-5xl m-auto">
      <Heading>Blogs</Heading>
      <small>Last updated at {now}</small>
      <div className="flex flex-col gap-4 mt-4">
        {posts.map(({ node }: { node: { id: string, url: string, title: string, brief: string } }) => (
          <Link target="_blank" href={node.url} key={node.id} className="flex flex-col gap-2 border rounded-md p-4">
            <Heading size={HeadingSize.sm}>
              {node.title}
            </Heading>
            <Text>{node.brief}...</Text>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default BlogsPage