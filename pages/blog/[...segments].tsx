import { Post } from "contentlayer/generated";
import { PostProps, SegmentsParams, allBlogPaths, getPost } from "lib/content";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths<SegmentsParams> = async () => {
  return {
    paths: allBlogPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PostProps,
  SegmentsParams
> = async ({ params }) => {
  const { segments } = params!;
  const post: Post | undefined = getPost(segments);
  return post ? { props: { post } } : { notFound: true };
};

const DocPage = ({ post }: PostProps) => {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl">{post.title}</h1>
      {post.tags && (
        <ul className="flex space-x-2">
          {post.tags.map((t) => (
            <li
              className="bg-gray-100 py-0.5 px-2 text-sm rounded hover:bg-gray-200"
              key={t}
            >
              <Link href={`./tags/${t}`}>{t}</Link>
            </li>
          ))}
        </ul>
      )}
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
};

export default DocPage;
