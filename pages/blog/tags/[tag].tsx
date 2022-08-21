import { ParsedUrlQuery } from "querystring";

import { Post, allPosts } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { unique } from "typescript-array-utils";

interface Params extends ParsedUrlQuery {
  tag: string;
}

type Props = {
  tag: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const tags: string[] = unique(allPosts.flatMap((p) => p.tags));
  const paths: string[] = tags.map((t) => `/blog/tags/${t}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { tag } = params!;
  return { props: { tag } };
};

const TagPage = ({ tag }: Props) => {
  const postsWithTag: Post[] = allPosts.filter((p) => p.tags.includes(tag));

  return (
    <article className="space-y-4">
      <h1 className="text-3xl">
        Pages tagged <span className="font-bold">{tag}</span>
      </h1>
      <ul>
        {postsWithTag.map((p) => (
          <li key={p._id}>
            <Link href={p.path}>
              <a>{p.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default TagPage;
