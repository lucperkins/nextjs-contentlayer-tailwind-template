import { ParsedUrlQuery } from "querystring";

import { Post, allPosts } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

interface Params extends ParsedUrlQuery {
  segments: string[];
}

type Props = {
  post: NonNullable<ReturnType<typeof getPost>>;
};

const arraysEqual = <T,>(a: T[], b: T[]): boolean =>
  a.every((val, idx) => val === b[idx]);

const getPost = (segments: string[]): Post | undefined => {
  return allPosts.find((d) => arraysEqual(d.relativePath.split("/"), segments));
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths: string[] = allPosts.map((p) => p.path);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { segments } = params!;
  const post: Post | undefined = getPost(segments);
  return post ? { props: { post } } : { notFound: true };
};

const DocPage = ({ post }: Props) => {
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
