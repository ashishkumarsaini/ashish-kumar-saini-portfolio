import { Heading, Text } from "@/components/typography";
import Link from "next/link";

const BlogsPage = async () => {
  const response = await fetch('https://gql.hashnode.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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


  return (
    <div className="flex flex-col gap-4">
      {posts.map(({ node }: { node: { id: string, url: string, title: string, brief: string } }) => (
        <Link target="_blank" href={node.url} key={node.id} className="flex flex-col gap-2">
          <Heading>
            {node.title}
          </Heading>
          <Text>{node.brief}...</Text>
        </Link>
      ))}
    </div>
  )
};

export default BlogsPage